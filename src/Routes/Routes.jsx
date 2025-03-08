import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandPage from "../Pages/LandingPage/LandPage";
import Login from "../Pages/Login/Login";

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
        path: "/",
        element: <LandPage />,
      },
    ],
  },
]);
