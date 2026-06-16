import "./chunk-KBUIKKCC.js";

// src/app/pages/pdfa/pdfa.routes.ts
var PdfaRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-VVSHYDDU.js").then((m) => m.PdfaComponent),
    children: [
      {
        path: "bankForm",
        loadComponent: () => import("./chunk-NLV2N3ZQ.js").then((m) => m.BankFormComponent)
      },
      {
        path: "returnPda",
        loadComponent: () => import("./chunk-3ZLDHGKQ.js").then((m) => m.ReturnPdaComponent)
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
        loadComponent: () => import("./chunk-5SG2NBAO.js").then((m) => m.PortAgentFormComponent)
      }
    ]
  }
];
export {
  PdfaRoutes
};
//# sourceMappingURL=chunk-Q5C3YWWS.js.map
