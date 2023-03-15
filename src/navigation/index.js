import { createBrowserRouter } from "react-router-dom";
import Landing from "../scenes/landing";

export const router = createBrowserRouter([
    {
        path: "/s1",
        element: <Landing />,
    },
    {
      path: "/",
      element: <Landing />,
    },
]);
  