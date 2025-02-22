import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FoodContextProvider from "./store/context-food.tsx";
import UserProgressContextProvider from "./store/user-progress-context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProgressContextProvider>
        <FoodContextProvider>
          <App />
        </FoodContextProvider>
      </UserProgressContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
