import React from "react";
import Layout from "./index";
import { mount } from "enzyme";

const wrapper = mount(<Layout />);

describe("Layout tests", () => {
 it("renders container on Layout", () => {
  expect(wrapper.find(".container-fluid")).toBeTruthy();
 });

 it("has a flex disposition", () => {
  expect(wrapper.find(".flex")).toBeTruthy();
 });
 it("has the column direction", () => {
  expect(wrapper.find(".flex-col")).toBeTruthy();
 });
 it("has the right font", () => {
  expect(wrapper.find(".font-poppins")).toBeTruthy();
 });
 it("has a min height", () => {
  expect(wrapper.find(".h-screen")).toBeTruthy();
 });
});
