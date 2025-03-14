import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandPage from "../Pages/LandingPage/LandPage";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";

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
    ],
  },
]);
