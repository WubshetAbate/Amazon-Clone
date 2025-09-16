import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./Components/Product/CartContext.jsx"; // Import your CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);
