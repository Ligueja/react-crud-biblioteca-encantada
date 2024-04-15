import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Livrarias } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Livrarias />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
