import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Gallery } from "../pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
