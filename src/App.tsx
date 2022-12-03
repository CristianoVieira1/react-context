import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./router";

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};
export default App;
