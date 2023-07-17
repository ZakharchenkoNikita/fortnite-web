import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import CosmeticsPage from "./pages/Cosmetics";
import CosmeticDetailPage from "./pages/CosmeticDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "cosmetics",
        element: <CosmeticsPage />,
      },
      {
        path: "cosmetics/:cosmeticId",
        element: <CosmeticDetailPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
