import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const CalendlyContext = React.createContext(false);

ReactDOM.render(
 <React.StrictMode>
  <Router>
   <CalendlyContext.Provider value={false}>
    <App />
   </CalendlyContext.Provider>
  </Router>
 </React.StrictMode>,
 document.getElementById("root")
);
