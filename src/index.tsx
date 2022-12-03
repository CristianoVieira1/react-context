import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { LanguagesProvider } from "./hooks/context";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguagesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </LanguagesProvider>
  </React.StrictMode>
);
reportWebVitals();
