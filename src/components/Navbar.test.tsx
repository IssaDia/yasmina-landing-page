import { render } from "@testing-library/react";
import React from "react";
import { Navbar } from "./Navbar";

describe("Navbar tests", () => {
 const { container } = render(<Navbar />);
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
 it("contains logo element", () => {
  const logo = container.querySelector("navbar-brand") as HTMLElement;
  expect(navbar).toContainElement(logo);
 });
});
