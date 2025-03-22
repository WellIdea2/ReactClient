import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Home";

export const appRouter = createBrowserRouter([
  {
    element: <HomePage/>,
    path: "/",
  } 
]);
