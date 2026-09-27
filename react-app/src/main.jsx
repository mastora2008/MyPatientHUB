import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FindDoctor from "./FindDoctor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FindDoctor />
  </StrictMode>
);