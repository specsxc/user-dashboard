import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import UserDetails from "./components/UserDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ path: ":userid", Component: UserDetails }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
