import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavigationContextProvider } from "./components/services/navigation/navigation.context.jsx";
import { ThemeContextProvider } from "./components/services/theme/theme.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
