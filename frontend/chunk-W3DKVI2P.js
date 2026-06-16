import "./chunk-KBUIKKCC.js";

// src/app/pages/master/master-tabs/master.routes.ts
var Masterroutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-AQQHCTLL.js").then((masterTabs) => masterTabs.MasterTabsComponent),
    data: { breadcrumb: "master/master-tabs" },
    children: [
      {
        path: "client",
        loadComponent: () => import("./chunk-ZJBY4PVH.js").then((client) => client.ClientComponent),
        data: { breadcrumb: "Client" }
      },
      {
        path: "country",
        loadComponent: () => import("./chunk-IBNUSKMJ.js").then((country) => country.CountryComponent),
        data: { breadcrumb: "Country" }
      },
      {
        path: "vessel",
        loadComponent: () => import("./chunk-ZG4WHTZX.js").then((vessel) => vessel.VesselComponent),
        data: { breadcrumb: "Vessel" }
      },
      {
        path: "cargo",
        loadComponent: () => import("./chunk-SKJ6QU3J.js").then((cargo) => cargo.CargoComponent),
        data: { breadcrumb: "Cargo" }
      },
      {
        path: "purpose",
        loadComponent: () => import("./chunk-JFGKEPZ5.js").then((purpose) => purpose.PurposeComponent),
        data: { breadcrumb: "Purpose" }
      },
      {
        path: "port-agent",
        loadComponent: () => import("./chunk-NHFWFDTJ.js").then((agent) => agent.PortAgentComponent),
        data: { breadcrumb: "Port Agent" }
      },
      {
        path: "port",
        loadComponent: () => import("./chunk-C46MFBMD.js").then((port) => port.PortComponent),
        data: { breadcrumb: "Port" }
      },
      {
        path: "user-management",
        loadComponent: () => import("./chunk-22RZ76YV.js").then((user) => user.UserManagementComponent),
        data: { breadcrumb: "User Management" }
      },
      {
        path: "tariff-services",
        loadComponent: () => import("./chunk-NGGW65SO.js").then((tariff) => tariff.TariffServicesComponent),
        data: { breadcrumb: "Tariff Services" }
      }
    ]
  }
];
export {
  Masterroutes
};
//# sourceMappingURL=chunk-W3DKVI2P.js.map
