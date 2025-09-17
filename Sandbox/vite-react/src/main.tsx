// main.tsx
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom"; // ✅ Import here
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ Only here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
