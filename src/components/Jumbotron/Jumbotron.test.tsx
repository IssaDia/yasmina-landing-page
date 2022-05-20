import React from "react";
import { render, screen } from "@testing-library/react";
import Jumbotron from "./index";

describe("jumbotron tests", () => {
 beforeEach(() => {
  render(<Jumbotron />);
 });
 it("must contains a picture", () => {
  const imgElement = screen.getByRole("jumbotronImage");
  expect(imgElement).toContainHTML("img");
 });
 it("renders a rounded picture", () => {
  const imgElement = screen.getByRole("jumbotronImage");

  expect(imgElement).toHaveClass("rounded-full");
 });
 it("has alt information in image", () => {
  const imgElement = screen.getByRole("jumbotronImage");
  expect(imgElement).toHaveAttribute("alt");
 });
 it("has  a specific width in image", () => {
  const imgElement = screen.getByRole("jumbotronImage");
  expect(imgElement).toHaveClass("w-64");
 });
 it("has a specific height in image", () => {
  const imgElement = screen.getByRole("jumbotronImage");
  expect(imgElement).toHaveClass("h-64");
 });
 it("has a source in image", () => {
  const imgElement = screen.getByRole("jumbotronImage");
  expect(imgElement).toHaveAttribute("src");
 });
});
