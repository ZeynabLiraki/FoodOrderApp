import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FoodContextProvider from "./store/context-food.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </StrictMode>
);
