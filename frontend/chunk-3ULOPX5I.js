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
        loadComponent: () => import("./chunk-SX6O6CYO.js").then((client) => client.ClientComponent),
        data: { breadcrumb: "Client" }
      },
      {
        path: "country",
        loadComponent: () => import("./chunk-3GUK5MST.js").then((country) => country.CountryComponent),
        data: { breadcrumb: "Country" }
      },
      {
        path: "vessel",
        loadComponent: () => import("./chunk-YRIJLLW3.js").then((vessel) => vessel.VesselComponent),
        data: { breadcrumb: "Vessel" }
      },
      {
        path: "cargo",
        loadComponent: () => import("./chunk-6AHR6ZXR.js").then((cargo) => cargo.CargoComponent),
        data: { breadcrumb: "Cargo" }
      },
      {
        path: "purpose",
        loadComponent: () => import("./chunk-AC2BB4GR.js").then((purpose) => purpose.PurposeComponent),
        data: { breadcrumb: "Purpose" }
      },
      {
        path: "port-agent",
        loadComponent: () => import("./chunk-MW437N3U.js").then((agent) => agent.PortAgentComponent),
        data: { breadcrumb: "Port Agent" }
      },
      {
        path: "port",
        loadComponent: () => import("./chunk-7DTR7XFL.js").then((port) => port.PortComponent),
        data: { breadcrumb: "Port" }
      },
      {
        path: "user-management",
        loadComponent: () => import("./chunk-HNSNUA5Y.js").then((user) => user.UserManagementComponent),
        data: { breadcrumb: "User Management" }
      },
      {
        path: "tariff-services",
        loadComponent: () => import("./chunk-EL6ND7XA.js").then((tariff) => tariff.TariffServicesComponent),
        data: { breadcrumb: "Tariff Services" }
      }
    ]
  }
];
export {
  Masterroutes
};
//# sourceMappingURL=chunk-3ULOPX5I.js.map
