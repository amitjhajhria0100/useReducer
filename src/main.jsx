import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReducerStore from "./store/ReducerStore.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReducerStore>
        <App />
      </ReducerStore>
    </BrowserRouter>
  </StrictMode>
);