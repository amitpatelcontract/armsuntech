import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
