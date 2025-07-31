import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home/index.jsx";
import NotFound from "pages/NotFound";
import Stories from "pages/Stories";
import Features from "pages/Features";
import Pricing from "pages/Pricing";
import GetInvite from "pages/GetInvite";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "stories",
      element: <Stories />,
    },
    {
      path: "features",
      element: <Features />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "get-invite",
      element: <GetInvite />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
