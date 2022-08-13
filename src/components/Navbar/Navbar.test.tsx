import React from "react";
import { mount } from "enzyme";
import Navbar from "./index";
import { BrowserRouter } from "react-router-dom";

const wrapper = mount(
 <BrowserRouter>
  <Navbar />
 </BrowserRouter>
);
describe("Navbar tests", () => {
 it("contains nav element", () => {
  expect(wrapper).toHaveLength(1);
 });
 it("has the right stack order", () => {
  expect(wrapper.find(".z-10")).toBeTruthy();
 });
 it("has a height", () => {
  expect(wrapper.find(".h-30")).toBeTruthy();
 });
 it("has the right element disposition", () => {
  expect(wrapper.find(".flex-shrink-0")).toBeTruthy();
 });
 //  it("contains logo element", () => {
 //   const logo = container.querySelector("navbar-brand") as HTMLElement;
 //   expect(navbar).toContainElement(logo);
 //  });
});
