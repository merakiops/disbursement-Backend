// src/app/pages/master/master.utils.ts
var tabs = [
  {
    icon: "directions_boat",
    title: "Vessel",
    description: "Register vessel details including IMO, tonnage, and dimensions for audit records.",
    route: "layout/master/mastertabs/vessel"
  },
  {
    icon: "person",
    title: "Client",
    description: "Manage registered companies or organizations involved in your port operations.",
    route: "layout/master/mastertabs/client"
  },
  // {
  //   icon: 'language',
  //   title: 'Country',
  //   description: 'Define and maintain country details used across ports, vessels, and documentation.',
  //   route: 'layout/mastermastertabs/country'
  // },
  {
    icon: "anchor",
    title: "Port & Tariff",
    description: "Set up ports with location data for vessel arrivals, departures, and audits.",
    route: "layout/master/mastertabs/port"
  },
  {
    icon: "account_circle",
    title: "Port Agent",
    description: "Add or update local agents responsible for coordinating vessel activities.",
    route: "layout/master/mastertabs/port-agent"
  },
  {
    icon: "garage_home",
    title: "Cargo",
    description: "Define cargo types transported by vessels for better tracking and reporting.",
    route: "layout/master/mastertabs/cargo"
  },
  {
    icon: "flag",
    title: "Purpose",
    description: "Specify voyage purposes\u2014like bunkering, crew change, or cargo ops.",
    route: "layout/master/mastertabs/purpose"
  },
  {
    icon: "receipt_long",
    title: "Tariff Fees",
    description: "Manage Tariff services efficiently.",
    route: "layout/master/mastertabs/tariff-services"
  },
  {
    icon: "person_add",
    title: "User Management",
    description: "Manage users who have access to the system. Add or edit user details and assign roles.",
    route: "layout/master/mastertabs/user-management"
  }
];
var formatAddressForDisplay = (address) => {
  return address ? address.replace(/\\n/g, "\n") : "";
};
var formatAddressForStorage = (address) => {
  return address ? address.replace(/\n/g, "\\n") : "";
};
var handlePasteText = (event) => {
  const target = event.target;
  const currentValue = target.value;
  const selectionStart = target.selectionStart ?? currentValue.length;
  const selectionEnd = target.selectionEnd ?? currentValue.length;
  const selectedLength = selectionEnd - selectionStart;
  const currentLength = currentValue.length;
  const availableSpace = 50 - (currentLength - selectedLength);
  if (availableSpace <= 0) {
    event.preventDefault();
    return currentValue;
  }
  event.preventDefault();
  const pastedText = event.clipboardData?.getData("text") || "";
  const filteredText = pastedText.replace(/[^a-zA-Z\s]/g, "");
  const allowedText = filteredText.slice(0, availableSpace);
  const newValue = currentValue.slice(0, selectionStart) + allowedText + currentValue.slice(selectionEnd);
  return newValue?.trim();
};
var allowOnlyLetters = (event) => {
  const regex = /^[A-Za-z\s]+$/;
  const inputChar = String.fromCharCode(event.keyCode || event.which);
  if (!regex.test(inputChar)) {
    event.preventDefault();
  }
};
var allowLimitedInput = (event, limit) => {
  const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
  if (allowedKeys.includes(event.key))
    return;
  const input = event.target;
  if (input.value.length == limit) {
    event.preventDefault();
  }
};
var trimInput = (control) => {
  if (control && typeof control.value === "string") {
    const trimmed = control.value.replace(/\s{2,}/g, " ").trim();
    control.setValue(trimmed, { emitEvent: false });
  }
};

export {
  tabs,
  formatAddressForDisplay,
  formatAddressForStorage,
  handlePasteText,
  allowOnlyLetters,
  allowLimitedInput,
  trimInput
};
//# sourceMappingURL=chunk-A6CJVYKT.js.map
