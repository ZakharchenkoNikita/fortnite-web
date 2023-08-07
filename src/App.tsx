import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import LatestCosmeticsPage, {
  loader as cosmeticsLoader,
} from "./pages/LatestCosmetics";
import CosmeticDetailPage, {
  loader as cosmeticDetailLoader,
} from "./pages/CosmeticDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: cosmeticsLoader },
      {
        path: "latest-cosmetics",
        element: <LatestCosmeticsPage />,
        loader: cosmeticsLoader,
      },
      {
        path: "cosmetics/:cosmeticId",
        element: <CosmeticDetailPage />,
        loader: cosmeticDetailLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
