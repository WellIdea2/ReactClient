import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import UserAuthProvider from "./context/user-auth/UserAuthProvider.tsx";
import "./index.css";
import { queryClient } from "./services/config/queryClient.ts";
import ToastNotification from "./features/shared/ToastNotification.tsx";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserAuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
      <ReactQueryDevtools />
      <ToastNotification />
    </UserAuthProvider>
  </QueryClientProvider>
);
