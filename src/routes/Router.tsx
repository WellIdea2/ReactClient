import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import HomePage from "../features/home/HomePage";
import NutrientInfo from "../features/nutrition-info/NutrientInfo";
import ProtectedRoute from "./guards/ProtectedRoute";
import PublicRoute from "./guards/PublicRoute";

export const appRouter = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
            index: true,
          },
          {
            path: "/register",
            element: <Register />,
            index: true,
          },
          {
            path: "/nutrition-info",
            element: <NutrientInfo />,
            index: true,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <h1>Protected Route</h1>,
            index: true,
          },
        ],
      },
    ],
  },
]);
