import "./chunk-KBUIKKCC.js";

// src/app/shared/layout/layout.routes.ts
var LayoutRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-I4OSJ535.js").then((comp) => comp.LayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-PWGFXAX3.js").then((dashboardComp) => dashboardComp.DashboardComponent),
        data: { breadcrumb: "Dashboard" }
      },
      {
        path: "master",
        loadComponent: () => import("./chunk-GNOODTPY.js").then((master) => master.MasterComponent),
        data: { breadcrumb: "Repository" }
      },
      {
        path: "disbursement",
        loadComponent: () => import("./chunk-SIJXUIS7.js").then((disbursement) => disbursement.DisbursmentComponent),
        data: { breadcrumb: "Disbursement" }
      },
      {
        path: "master/mastertabs",
        loadChildren: () => import("./chunk-3ULOPX5I.js").then((masterTabs) => masterTabs.Masterroutes)
      },
      {
        path: "pda/create",
        loadComponent: () => import("./chunk-C32HZHVN.js").then((m) => m.PdaComponent),
        data: { breadcrumb: "PDA" }
      },
      {
        path: "pda/edit",
        loadComponent: () => import("./chunk-VKIRYXS6.js").then((m) => m.PdaEditComponent),
        data: { breadcrumb: "PDA Edit" }
      },
      {
        path: "fda/create",
        loadComponent: () => import("./chunk-3247UFCA.js").then((m) => m.FdaComponent),
        data: { breadcrumb: "FDA" }
      },
      {
        path: "fda/create/:id",
        loadComponent: () => import("./chunk-3247UFCA.js").then((m) => m.FdaComponent),
        data: { breadcrumb: "FDA" }
      },
      {
        path: "fda/edit",
        loadComponent: () => import("./chunk-FIZB373A.js").then((m) => m.FdaEditComponent),
        data: { breadcrumb: "FDA Edit" }
      },
      {
        path: "client-approval-list",
        loadComponent: () => import("./chunk-7UPBOKPO.js").then((m) => m.ClientApprovalListComponent),
        data: { breadcrumb: "Client Approval List" }
      },
      {
        path: "client-approval-form",
        loadComponent: () => import("./chunk-DEVH5KQD.js").then((m) => m.ClientApprovalFormComponent),
        data: { breadcrumb: "Client Approval Form" }
      }
    ]
  }
];
export {
  LayoutRoutes
};
//# sourceMappingURL=chunk-WW2LBYYQ.js.map
