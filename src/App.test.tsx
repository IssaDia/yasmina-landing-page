import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Layout from "./components/Layout/index";
import { BrowserRouter as Router } from "react-router-dom";

test("renders layout", () => {
 render(
  <Router>
   <App />
  </Router>
 );
 render(
  <Router>
   <Layout />
  </Router>
 );
});
