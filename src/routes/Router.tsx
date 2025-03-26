import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../features/auth/WelcomePage";

export const appRouter = createBrowserRouter([
  {
    element: <WelcomePage/>,
    path: "/",
  } 
]);
