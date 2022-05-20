import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./index";
// import { Navbar } from "./Navbar";

describe("Layout tests", () => {
 const { container } = render(
  <Router>
   <Layout />
  </Router>
 );
 it("renders container on Layout", () => {
  expect(container.firstChild).toHaveClass("container-fluid");
 });

 it("got flex disposition", () => {
  const { container } = render(
   <Router>
    <Layout />
   </Router>
  );
  expect(container.firstChild).toHaveClass("flex");
 });
 it("got column direction", () => {
  const { container } = render(
   <Router>
    <Layout />
   </Router>
  );
  expect(container.firstChild).toHaveClass("flex-col");
 });
 it("got the right font", () => {
  const { container } = render(
   <Router>
    <Layout />
   </Router>
  );
  expect(container.firstChild).toHaveClass("font-poppins");
 });
 it("takes min height", () => {
  const { container } = render(
   <Router>
    <Layout />
   </Router>
  );
  expect(container.firstChild).toHaveClass("h-screen");
 });
});
