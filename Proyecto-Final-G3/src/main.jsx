import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css-general.css";
import "./components/Header/HeaderStyle.css";
import "./components/Main/Left-Container/LeftContainer.css";
import "./components/Main/MainStyle.css";
import "./Images/favicon-32x32.png";
import "./components/Cart/Cart.css";
import "./components/ProductCart/ProductCart.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
