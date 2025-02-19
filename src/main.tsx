import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FoodContextProvider from "./store/context-food.tsx";
import UserProgressContextProvider from "./store/user-progress-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProgressContextProvider>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </UserProgressContextProvider>
  </StrictMode>
);


