
import json


class CommunicationDiffHandler:

    def _compare_meraki_services(self, old_services, new_services, compare_fields=None, old_disb=None, new_dto=None):
        """Compare Meraki services and return structured change report."""
        service_changes = []
        if compare_fields is None:
            compare_fields = ["optional", "movement", "total"]
        old_service_map = {svc["service"]: svc for svc in old_services.get("items", [])}

        for new_service in new_services.get("items", []):
            service_name = new_service["service"]
            old_service = old_service_map.get(service_name, {})

            service_change = {
                "service_name": service_name,
                "optional": None,
                "required": None,
                "movement": [],
                "total_change": None
            }

            movement_changes = []

            for new_sub in new_service.get("subService", []):
                sub_name = new_sub.get("name")
                if new_sub.get("hide") == "Y":
                    continue

                old_sub = next((sub for sub in old_service.get("subService", []) if sub.get("name") == sub_name), None)

                # Movement comparison
                if "movement" in compare_fields:
                    old_movement = old_sub.get("movement") if old_sub else None
                    new_movement = new_sub.get("movement")
                    old_movement = old_movement.split(':')[1] if old_movement and ':' in old_movement else (old_movement or 0)
                    new_movement = new_movement.split(':')[1] if new_movement and ':' in new_movement else (new_movement or 0)
                    if old_movement != new_movement:
                        movement_changes.append({
                            "subservice_name": sub_name,
                            "old_value": old_movement,
                            "new_value": new_movement,
                            "description": f"{sub_name or service_name} movement changed from {old_movement} to {new_movement}"
                        })

            if movement_changes:
                service_change["movement"] = movement_changes
                # Total change occurs if any movement changes
                old_total = old_service.get("total")
                new_total = new_service.get("total")
                if old_total != new_total:
                    service_change["total_change"] = {
                        "old_total": old_total,
                        "new_total": new_total,
                        "description": f"Service total updated from {old_total} to {new_total}"
                    }

            # Optional/Required flags
            if "optional" in compare_fields:
                old_opt = old_sub.get("optional") if old_sub else None
                new_opt = new_sub.get("optional")

                # Only record if it actually changed
                if old_opt != new_opt:
                    if old_opt == "Y" and new_opt == "N":
                        service_change.setdefault("removed_from_optional", []).append(sub_name)
                    elif old_opt == "N" and new_opt == "Y":
                        service_change.setdefault("added_to_optional", []).append(sub_name)

            if service_change.get("added_to_optional"):
                names = [n for n in service_change["added_to_optional"] if n]
                if names:
                    service_change["optional"] = f"{', '.join(names)} changed from required to optional"

            if service_change.get("removed_from_optional"):
                names = [n for n in service_change["removed_from_optional"] if n]
                if names:
                    service_change["required"] = f"{', '.join(names)} changed from optional to required"

            # Add service if any changes
            if service_change["optional"] or service_change["required"] or service_change["movement"] or service_change["total_change"]:
                service_changes.append(service_change)

        # Build detailed summary using \n for movements and totals
        summaries = []
        for svc in service_changes:
            parts = []
            if svc["optional"]:
                parts.append(svc["optional"])
            if svc["required"]:
                parts.append(svc["required"])
            for mv in svc["movement"]:
                parts.append(mv["description"])
            if svc["total_change"]:
                parts.append(svc["total_change"]["description"])
            svc["summary"] = "\n".join(parts)
            summaries.append(svc["summary"])

        if old_disb and new_dto:
            fda_summary = CommunicationDiffHandler.compare_fda_and_services(old_disb, new_dto)
            summaries.extend(fda_summary)

        return {
            "services": service_changes,
            "summary": summaries
        }

    def _compare_vessel_details(self, old_vessel, new_vessel, compare_fields=None):
        """Compare vessel details including additional_properties"""
        changes = []

        if compare_fields is None:
            compare_fields = ["grt", "rgrt", "nrt", "loa", "beam", "dwt", "depth"]

        # Handle empty or None vessels
        if not old_vessel:
            old_vessel = {}
        if not new_vessel:
            new_vessel = {}

        # Flatten vessel data
        def flatten_vessel(vessel):
            if not vessel:
                return {}
            base = {k: v for k, v in vessel.items() if k != "additional_properties"}
            additional = vessel.get("additional_properties", {})
            return {**base, **additional}

        old_flat = flatten_vessel(old_vessel)
        new_flat = flatten_vessel(new_vessel)

        # Normalize helper to compare values correctly
        def normalize(value):
            # Convert numeric strings to their numeric types
            if isinstance(value, str):
                try:
                    # Try int first
                    if value.isdigit():
                        return int(value)
                    # Then float
                    return float(value)
                except ValueError:
                    return value
            return value

        # Compare all fields
        all_fields = set(compare_fields) | set(old_flat.keys()) | set(new_flat.keys())

        for field in all_fields:
            old_value_raw = old_flat.get(field)
            new_value_raw = new_flat.get(field)

            # Normalized values for comparison
            old_value = normalize(old_value_raw)
            new_value = normalize(new_value_raw)

            if old_value != new_value:
                changes.append({
                    "field": field,
                    "old_value": old_value_raw,
                    "new_value": new_value_raw,
                    "description": f"{field} updated from '{old_value_raw}' to '{new_value_raw}'"
                })

        return {
            "properties": changes,
            "summary": [change["description"] for change in changes]
        }


    def _compare_portagent_services(self, old_services, new_services, compare_fields=None):
        """
        Compare Port Agent services and generate a grouped, clean history:
        - negotiate[]  → services moved into negotiation
        - agreed[]     → services newly agreed
        - service[]    → detailed remark/feedback/total updates
        - summary[]    → grouped human-readable summary
        """
        # print(f"Old Services:\n{json.dumps(old_services, indent=4)}\n")
        # print(f"New Services:\n{json.dumps(new_services, indent=4)}\n")


        if compare_fields is None:
            compare_fields = ["negotiate", "agreed", "pa_remark", "meraki_feedback", "client_comment", "total"]

        details = {
            "negotiate": [],
            "agreed": [],
            "service": []
        }

        old_map = {s["service"]: s for s in old_services.get("items", [])}
        print(f"DEBUG: old_map services: {list(old_map.keys())}")

        for new in new_services.get("items", []):
            name = new["service"]
            old = old_map.get(name)
            print(f"DEBUG: Processing service '{name}'")

            messages = []

            # ---------------------------------------------------------
            # NEW SERVICE
            # ---------------------------------------------------------
            if not old:
                print(f"DEBUG: '{name}' is a new service")
                details["service"].append({
                    "service_name": name,
                    "message": ["New service added"]
                })
                continue

            # ---------------------------------------------------------
            # EXISTING SERVICE — CHECK CHANGES
            # ---------------------------------------------------------

            # Check negotiate change
            if "negotiate" in compare_fields and old.get("negotiate") != new.get("negotiate"):
                print(f"DEBUG: '{name}' negotiate changed from '{old.get('negotiate')}' to '{new.get('negotiate')}'")
                if new.get("negotiate") == "Y":
                    if name not in details["negotiate"]:
                        details["negotiate"].append(name)
                        print(f"DEBUG: Added '{name}' to negotiate list")

            # Check agreed change
            if "agreed" in compare_fields and old.get("agreed") != new.get("agreed"):
                print(f"DEBUG: '{name}' agreed changed from '{old.get('agreed')}' to '{new.get('agreed')}'")
                if new.get("agreed") == "Y":
                    if name not in details["agreed"]:
                        details["agreed"].append(name)
                        print(f"DEBUG: Added '{name}' to agreed list")

            # ---------------------------------------------------------
            # REMARK / FEEDBACK / TOTAL CHANGES (GO INTO message[])
            # ---------------------------------------------------------
            if "pa_remark" in compare_fields and old.get("pa_remark") != new.get("pa_remark") and new.get("pa_remark", "").strip():
                messages.append(f"PA Remark: {new['pa_remark']}")

            if "meraki_feedback" in compare_fields and old.get("meraki_feedback") != new.get("meraki_feedback") and new.get("meraki_feedback", "").strip():
                messages.append(f"Feedback from Meraki: {new['meraki_feedback']}")

            if "client_comment" in compare_fields and old.get("client_comment") != new.get("client_comment") and new.get("client_comment", "").strip():
                messages.append(f"Client Remark: {new['client_comment']}")

            if "total" in compare_fields and old.get("total") != new.get("total"):
                messages.append(f"Total updated from {old.get('total')} to {new.get('total')}")

            # ---------------------------------------------------------
            # IF MESSAGE EXISTS, ADD TO details.service
            # ---------------------------------------------------------
            if messages:
                details["service"].append({
                    "service_name": name,
                    "message": messages
                })

        # ---------------------------------------------------------
        # BUILD SUMMARY
        # ---------------------------------------------------------
        summary = []

        if details["negotiate"]:
            summary.append(f"{', '.join(details['negotiate'])} marked for negotiation")

        if details["agreed"]:
            summary.append(f"{', '.join(details['agreed'])} marked as agreed")

        if details["service"]:
            updated_names = [s["service_name"] for s in details["service"]]
            summary.append(f"Services updated: {', '.join(updated_names)}")

        # print(f"DEBUG: Final negotiate list: {details['negotiate']}")
        # print(f"DEBUG: Final agreed list: {details['agreed']}")
        # print(f"DEBUG: Final service updates: {len(details['service'])} services")
        # print(f"DEBUG: Final summary: {summary}")

        result = {
            "services": details["service"],
            "negotiate": details["negotiate"],
            "agreed": details["agreed"],
            "summary": summary
        }
        # print(f"DEBUG: _compare_portagent_services returning: {result}")
        return result


    def _get_modified_data(
    self,
    old_meraki_data,
    new_meraki_data,
    old_portagent_data,
    new_portagent_data,
    old_vessel_data,
    new_vessel_data,
    old_data=None, new_data=None, is_fda_creation=False,purpose_change=False
    ):
        """
        Get modified data by comparing different types of objects (vessel, services, etc.).
        Always returns sections for vessel, meraki, and port_agent.
        """
        modified = {
            "modified": {
                "vessel": {"properties": [], "summary": []},
                "meraki": {"services": [], "summary": []},
                "port_agent": {"services": [], "summary": []}
            }
        }

        # Compare vessel data
        vessel_result = self.compare_any(
            old_data=old_vessel_data or {},
            new_data=new_vessel_data or {},
            object_type="vessel"
        )
        if vessel_result:
            modified["modified"]["vessel"].update(vessel_result)

        # Handle purpose change - skip detailed comparison
        if purpose_change:
            modified["modified"]["meraki"]["summary"] = ["Purpose modified and services updated"]
        elif is_fda_creation and old_data and new_data:
            # For FDA creation, only add summary fields to meraki section
            fda_summary = CommunicationDiffHandler.compare_fda_and_services(old_data, new_data)
            modified["modified"]["meraki"]["summary"] = fda_summary
        else:
            # Compare Meraki services for non-FDA creation
            meraki_result = self.compare_any(
                old_data=(old_meraki_data.get("services", {}) if old_meraki_data else {}),
                new_data=(new_meraki_data.get("services", {}) if new_meraki_data else {}),
                object_type="meraki", old_data_fda=old_data, new_data_fda=new_data
            )
            if meraki_result:
                modified["modified"]["meraki"].update(meraki_result)

        # Compare Port Agent services only if not FDA creation
        if not is_fda_creation:
            pa_result = self.compare_any(
                old_data=(old_portagent_data.get("services", {}) if old_portagent_data else {}),
                new_data=(new_portagent_data.get("services", {}) if new_portagent_data else {}),
                object_type="port_agent"
            )
            if pa_result:
                modified["modified"]["port_agent"].update(pa_result)

        return modified


    def _get_client_approval_summary(self, portagent_data):
        """
        Add the client section to the existing modified structure.
        
        Args:
            portagent_data (dict): full object containing services
        
        Returns:
            dict: modified object with added client section
        """
        modified = {
            "modified": {
                "vessel": {"properties": [], "summary": []},
                "meraki": {"services": [], "summary": []},
                "port_agent": {"services": [], "summary": []},
                "client": {"services": [], "summary": []}
            }
        }
        # Generate the client section
        client_section = self.prepare_client_approval_request(portagent_data)
        
        # Add it to the modified object
        modified["modified"]["client"] = client_section["client"]
        
        return modified
    
    def prepare_client_approval_request(self, disbursement_data):
        """
        Extract services for client approval from full JSON.
        - Filters services where display_to_client == 'Y'
        - Uses meraki_remark_client as message
        - Builds a summary with service names submitted for approval

        Args:
            full_json (dict): The full JSON object containing 'services'

        Returns:
            dict: { "client": { "services": [...], "summary": [...] } }
        """

        client_section = {
            "services": [],
            "summary": []
        }

        # Extract services safely
        services_data = disbursement_data.get("services", {})
                
        items = services_data.get("items", [])

        service_names_for_summary = []

        for svc in items:

            if svc.get("display_to_client") == "Y":
                message = svc.get("meraki_remark_client", "").strip()
                client_section["services"].append({
                    "service_name": svc.get("service", ""),
                    "message": message
                })
                service_names_for_summary.append(svc.get("service", ""))
        
        # Build summary (just a comma-separated list of services)
        if service_names_for_summary:
            summary_text = f"{', '.join(service_names_for_summary)} submitted for approval"
            client_section["summary"].append(summary_text)

        result = {"client": client_section}

        return result


    def compare_any(self, old_data, new_data, object_type, compare_fields=None, old_data_fda=None, new_data_fda=None):
        """
        Flexible comparison method for different types of data (vessel, services, etc.).
        """
        
        if object_type == "vessel":
            return self._compare_vessel_details(old_data, new_data, compare_fields)
        elif object_type == "meraki":
            return self._compare_meraki_services(old_data, new_data, compare_fields, old_data_fda, new_data_fda)
        elif object_type == "port_agent":
            return self._compare_portagent_services(old_data, new_data)
        else:
            raise ValueError(f"Unsupported object type: {object_type}")

    def _get_client_form_submit_summary(self, old_portagent_data, new_portagent_data):
        """
        Compare old vs new data for pda_client_form_submit.
        
        Args:
            old_portagent_data (dict): old portagent data
            new_portagent_data (dict): new portagent data
        
        Returns:
            dict: modified object with client section if changes detected
        """
        modified = {
            "modified": {
                "vessel": {"properties": [], "summary": []},
                "meraki": {"services": [], "summary": []},
                "port_agent": {"services": [], "summary": []}
            }
        }
        
        # Get services from old and new data
        old_services = old_portagent_data.get("services", {}).get("items", [])
        new_services = new_portagent_data.get("services", {}).get("items", [])
        
        # Create maps for easy lookup
        old_service_map = {svc.get("service"): svc for svc in old_services}
        
        # Track services that changed display_to_client
        client_submitted_services = []
        
        for new_svc in new_services:
            service_name = new_svc.get("service")
            old_svc = old_service_map.get(service_name, {})
            
            # If display_to_client changed, include this service
            if old_svc.get("display_to_client") != new_svc.get("display_to_client"):
                message = new_svc.get("client_comment", "").strip()
                client_submitted_services.append({
                    "service_name": service_name,
                    "message": message
                })
        
        # If any services are submitted to client, add client section
        if client_submitted_services:
            service_names = [svc["service_name"] for svc in client_submitted_services]
            summary_text = f"{', '.join(service_names)} updated"
            
            modified["modified"]["client"] = {
                "services": client_submitted_services,
                "summary": [summary_text]
            }
        
        return modified

    def compare_fda_and_services(old_disb, new_dto):
        summary = []
        
        if not old_disb.pda:
            return summary
            
        field_map = {
            "eta": (old_disb.pda.pda_eta, getattr(new_dto, "eta", None)),
            "etd": (old_disb.pda.pda_etd, getattr(new_dto, "etd", None)),
            "roe": (old_disb.pda.pda_roe, getattr(new_dto, "roe", None)),
            "currency_from": (old_disb.pda.pda_currency_from, getattr(new_dto, "fda_currency_from", None)),
            "currency_to": (old_disb.pda.pda_currency_to, getattr(new_dto, "fda_currency_to", None)),
            "voyage": (old_disb.voyage, getattr(new_dto, "voyage", None)),
            "ref_no": (old_disb.pda.invoice_ref_no, getattr(new_dto, "invoice_ref_no", None))
        }

        for field_name, (old_val, new_val) in field_map.items():
            if old_val != new_val:
                summary.append(f"{field_name} changed from '{old_val}' to '{new_val}'")

        if old_disb.cargo_id != getattr(new_dto.cargo, "cargo_id", None):
            summary.append(f"cargo changed from '{old_disb.cargo_id}' to '{new_dto.cargo.cargo_id}'")
        if old_disb.purpose_id != getattr(new_dto.purpose, "purpose_id", None):
            summary.append(f"purpose changed from '{old_disb.purpose_id}' to '{new_dto.purpose.purpose_id}'")
        if old_disb.vsl_id != getattr(new_dto, "vessel_id", None):
            summary.append(f"vessel changed from '{old_disb.vsl_id}' to '{new_dto.vessel_id}'")

        return summary

