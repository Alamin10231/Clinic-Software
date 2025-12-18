// import { createBrowserRouter } from "react-router";

import { createBrowserRouter } from "react-router";
import Home from "./src/component/Home";
import Mainlyout from "./src/Mainlyout";
import Header from "./src/component/Header";
import Services from "./src/component/Services";
import Testmonial from "./src/component/Testmonial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlyout></Mainlyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testmonial",
        element: <Testmonial />,
      },
    ],
  },
]);
