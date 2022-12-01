import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguagesProvider } from "./hooks/context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguagesProvider>
      <App />
    </LanguagesProvider>
  </React.StrictMode>
);
reportWebVitals();
