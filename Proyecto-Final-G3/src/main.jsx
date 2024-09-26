import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css-general.css";
import "./HeaderStyle.css";
import "./MainStyle.css";
import "./Images/favicon-32x32.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
