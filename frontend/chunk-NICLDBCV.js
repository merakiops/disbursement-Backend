import "./chunk-KBUIKKCC.js";

// src/app/shared/layout/layout.routes.ts
var LayoutRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-PCAMJPPD.js").then((comp) => comp.LayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-FKOVPP6O.js").then((dashboardComp) => dashboardComp.DashboardComponent),
        data: { breadcrumb: "Dashboard" }
      },
      {
        path: "master",
        loadComponent: () => import("./chunk-SKZ2MHE2.js").then((master) => master.MasterComponent),
        data: { breadcrumb: "Repository" }
      },
      {
        path: "disbursement",
        loadComponent: () => import("./chunk-HK2LKTTK.js").then((disbursement) => disbursement.DisbursmentComponent),
        data: { breadcrumb: "Disbursement" }
      },
      {
        path: "master/mastertabs",
        loadChildren: () => import("./chunk-W3DKVI2P.js").then((masterTabs) => masterTabs.Masterroutes)
      },
      {
        path: "pda/create",
        loadComponent: () => import("./chunk-6EWDY3AW.js").then((m) => m.PdaComponent),
        data: { breadcrumb: "PDA" }
      },
      {
        path: "pda/edit",
        loadComponent: () => import("./chunk-OUHFHAIR.js").then((m) => m.PdaEditComponent),
        data: { breadcrumb: "PDA Edit" }
      },
      {
        path: "fda/create",
        loadComponent: () => import("./chunk-6CIPOB4E.js").then((m) => m.FdaComponent),
        data: { breadcrumb: "FDA" }
      },
      {
        path: "fda/create/:id",
        loadComponent: () => import("./chunk-6CIPOB4E.js").then((m) => m.FdaComponent),
        data: { breadcrumb: "FDA" }
      },
      {
        path: "fda/edit",
        loadComponent: () => import("./chunk-CFWDWSQD.js").then((m) => m.FdaEditComponent),
        data: { breadcrumb: "FDA Edit" }
      },
      {
        path: "client-approval-list",
        loadComponent: () => import("./chunk-WHNFQUMP.js").then((m) => m.ClientApprovalListComponent),
        data: { breadcrumb: "Client Approval List" }
      },
      {
        path: "client-approval-form",
        loadComponent: () => import("./chunk-TASFTWG7.js").then((m) => m.ClientApprovalFormComponent),
        data: { breadcrumb: "Client Approval Form" }
      }
    ]
  }
];
export {
  LayoutRoutes
};
//# sourceMappingURL=chunk-NICLDBCV.js.map
