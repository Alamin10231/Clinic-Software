// import { createBrowserRouter } from "react-router";

import { createBrowserRouter } from "react-router";
import Home from "./src/component/Home";
import Mainlyout from "./src/Mainlyout";
import Header from "./src/component/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlyout></Mainlyout>,
    children: [
        {
             path: "/",
              element:
               <Home></Home> 
            },
           

        ],
  },
]);
