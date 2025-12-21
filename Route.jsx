import { createBrowserRouter } from "react-router";
import Mainlyout from "./src/Mainlyout";
import HomePage from "./src/pages/HomePage";
import ServicesPage from "./src/pages/ServicesPage";
import AboutPage from "./src/pages/AboutPage";
import TestimonialsPage from "./src/pages/TestimonialsPage";
import ContactPage from "./src/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlyout></Mainlyout>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/header",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/testmonial",
        element: <TestimonialsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
