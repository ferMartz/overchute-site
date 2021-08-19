import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: "*",
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: "/",
      component: lazy(() => import("../../views/HomeView")),
    },
    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default HomeRoutes;
