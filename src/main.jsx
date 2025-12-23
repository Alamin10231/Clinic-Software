import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { RouterProvider } from "react-router;
import { router } from "../Route.jsx";
import { RouterProvider } from "react-router";
import { QueryProvider } from "./Providers/QueryProvider.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>
);
