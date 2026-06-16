import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/pdfa.routes.ts
var PdfaRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-VVSHYDDU.js").then((m) => m.PdfaComponent),
    children: [
      {
        path: "bankForm",
        loadComponent: () => import("./chunk-AHGCH6TV.js").then((m) => m.BankFormComponent)
      },
      {
        path: "returnPda",
        loadComponent: () => import("./chunk-CDP7QD2X.js").then((m) => m.ReturnPdaComponent)
      },
      {
        path: "reviewContinue",
        loadComponent: () => import("./chunk-OGLL37VH.js").then((m) => m.ReviewContinueComponent)
      },
      {
        path: "",
        redirectTo: "bankForm",
        pathMatch: "full"
      },
      {
        path: "port-agent-form",
        loadComponent: () => import("./chunk-3BPYEHWQ.js").then((m) => m.PortAgentFormComponent)
      }
    ]
  }
];
export {
  PdfaRoutes
};
//# sourceMappingURL=chunk-CEH2PUAY.js.map
