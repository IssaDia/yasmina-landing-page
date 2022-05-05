import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar tests", () => {
 const { container } = render(
  <Router>
   <Navbar
    handleShow={function (): void {
     throw new Error("Function not implemented.");
    }}
   />
  </Router>
 );
 const navbar = container.querySelector("nav");
 it("contains nav element", () => {
  expect(navbar).toBeInTheDocument();
 });
 it("has the right stack order", () => {
  expect(navbar).toHaveClass("z-10");
 });
 it("has a height", () => {
  expect(navbar).toHaveClass("h-30");
 });
 it("has the right element disposition", () => {
  expect(navbar).toHaveClass("flex-shrink-0");
 });
 //  it("contains logo element", () => {
 //   const logo = container.querySelector("navbar-brand") as HTMLElement;
 //   expect(navbar).toContainElement(logo);
 //  });
});
