import React from "react";
import { render } from "@testing-library/react";
// import App from "./App";
import Layout from "./components/Layout/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { CalendlyModal } from "./components/Calendly";
import Reviews from "./components/Reviews/Container";
import App from "./App";

describe("App tests", () => {
 it("should contain a layout", () => {
  render(
   <Router>
    <Layout />
   </Router>
  );
 });
 it("should contain a Navbar Component", () => {
  const handleShow = jest.fn();
  render(
   <Router>
    <Navbar handleShow={handleShow} />
   </Router>
  );
 });
 it("should contain a Calendly Element", () => {
  const handleShow = jest.fn();
  const show = false;
  render(
   <Router>
    <CalendlyModal handleShow={handleShow} show={show} />
   </Router>
  );
 });
 it("should contain a Jumbotron Component", () => {
  render(
   <Router>
    <Jumbotron />
   </Router>
  );
 });
 it("should contain a Rewiew Component", () => {
  const { container } = render(<Reviews />);
  expect(container).toBeInTheDocument();
 });
});
