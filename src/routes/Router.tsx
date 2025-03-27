import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import HomePage from "../features/home/HomePage";
import NutrientInfo from "../features/nutrition-info/NutrientInfo";
import { Paths } from "../utils/constants";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import PublicGuard from "./guards/PublicGuard";

export const appRouter = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      {
        element: <GuestGuard />,
        children: [
          {
            path: Paths.LOGIN,
            element: <Login />,
            index: true,
          },
          {
            path: Paths.REGISTER,
            element: <Register />,
            index: true,
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: Paths.HOME,
            element: <h1>Protected Route</h1>,
            index: true,
          },
        ],
      },
      {
        element: <PublicGuard />,
        children: [
          {
            path: Paths.NUTRITION_INFO,
            element: <NutrientInfo />,
            index: true,
          },
        ],
      },
    ],
  },
]);
