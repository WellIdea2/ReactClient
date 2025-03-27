import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/Login";
import HomePage from "../features/home/HomePage";
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
            path: "/",
            element: <Login />,
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
