import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "store",
          element: <StorePage />,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
