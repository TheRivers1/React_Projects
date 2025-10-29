import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Clock from "./components/Clock";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Clock />
  </StrictMode>
);
