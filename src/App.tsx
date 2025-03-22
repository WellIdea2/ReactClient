import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import InterceptorProvider from "./context/InterceptorProvider";
import { appRouter } from "./routes/Router";

function App() {
  return (
    <ThemeProvider>
      <InterceptorProvider>
        <RouterProvider router={appRouter} />
      </InterceptorProvider>
    </ThemeProvider>
  );
}

export default App;
