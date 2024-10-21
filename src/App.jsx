import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";

const App = () => {
  return (
    <>
      <div className="general-layout">
        <div className="general-layout__primary-container">
          <Router>
            <AppRoutes />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
