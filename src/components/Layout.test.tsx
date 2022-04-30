import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";
import { Navbar } from "./Navbar";

describe("Layout tests", () => {
 it("renders container on Layout", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("container-fluid");
 });

 it("got flex disposition", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("flex");
 });
 it("got column direction", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("flex-col");
 });
 it("got the right font", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("font-poppins");
 });
 it("takes min height", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("h-screen");
 });
 it("must contains a navbar", () => {
  const navbar = render(<Navbar />);
  expect(navbar).toBeTruthy();
 });
});
