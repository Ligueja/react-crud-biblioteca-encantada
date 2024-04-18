import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Libraries } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Libraries />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
