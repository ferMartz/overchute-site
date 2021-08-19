import { PATH_APP } from "../paths";
import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";

// ----------------------------------------------------------------------

const AppRoutes = {
  path: PATH_APP.root,
  layout: HomeLayout,
  routes: [
    // APP
    // ----------------------------------------------------------------------
    {
      exact: true,
      path: PATH_APP.app.logoView,
      component: lazy(() => import("../../views/LogoView")),
    },

    // ----------------------------------------------------------------------
    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default AppRoutes;
