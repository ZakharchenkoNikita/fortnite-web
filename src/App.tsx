import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import CosmeticsPage, { loader as cosmeticsLoader } from "./pages/Cosmetics";
import CosmeticDetailPage from "./pages/CosmeticDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: cosmeticsLoader },
      {
        path: "cosmetics",
        element: <CosmeticsPage />,
        loader: cosmeticsLoader,
      },
      {
        path: ":cosmeticId",
        element: <CosmeticDetailPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
