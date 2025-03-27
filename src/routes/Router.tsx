import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/login/Login";
import Register from "../features/auth/register/Register";
import HomePage from "../features/home/HomePage";
import NutrientInfo from "../features/nutrition-info/NutrientInfo";
import UserProfilePage from "../features/user/profile/Profile";
import { Paths } from "../utils/constants";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import PublicGuard from "./guards/PublicGuard";
import FullAuthGuard from "./guards/FullAuthGuard";

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
          },
          {
            path: Paths.REGISTER,
            element: <Register />,
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: Paths.HOME,
            element: <h1>Protected Route</h1>,
          },
          {
            path: Paths.USER_PROFILE,
            element: <UserProfilePage />,
          },
          {
            element: <FullAuthGuard />,
            children: [
              {
                element: <h1>Full Auth Guard</h1>,
                path: Paths.NUTRI_BUDDY,
              },
            ],
          },
        ],
      },
      {
        element: <PublicGuard />,
        children: [
          {
            path: Paths.NUTRITION_INFO,
            element: <NutrientInfo />,
          },
        ],
      },
    ],
  },
]);
