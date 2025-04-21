import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandPage from "../Pages/LandingPage/LandPage";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LandPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
]);
