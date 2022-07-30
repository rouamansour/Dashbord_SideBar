import { lazy } from "react";

function importView(...args) {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join("/");
        arg = nestPath;
      }
      return arg;
    })
    .join("/");
  return import(`../views/${path}.js`);
}

export const mainRoutes = [
  {
    path: `/dashboard`,
    component: lazy(() => importView(["Dashboard", 2])),
  },
  {
    path: `/requests`,
    component: lazy(() => importView("Requests", "routes")),
    routes: [
      {
        path: `/requests/all`,
        component: lazy(() => importView("Requests", "Requests")),
      },
      {
        path: `/requests/editor`,
        component: lazy(() => importView("Requests", "Editor")),
      },
    ],
  },
  {
    path: `/users`,
    component: lazy(() => importView(["Users", 2])),
  },
  {
    path: `/register`,
    component: lazy(() => importView(["Register", 2])),
  },
  {
    path: `/login`,
    component: lazy(() => importView(["Login", 2])),
  },
];
