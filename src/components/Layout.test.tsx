import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";
import { Navbar } from "./Navbar";

describe("Layout tests", () => {
 test("renders container on Layout", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("container-fluid");
 });

 test("got flex disposition", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("flex");
 });
 test("got column direction", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("flex-col");
 });
 test("got the right font", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("font-poppins");
 });
 test("takes min height", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toHaveClass("h-screen");
 });
 test("must contains a navbar", () => {
  const { container } = shallow(<Layout />);
  container.contains(<Navbar />);
 });
});
