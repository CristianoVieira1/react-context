import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainRoutes from "./router";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainRoutes />
      </ThemeProvider>
    </Router>
  );
};
export default App;
