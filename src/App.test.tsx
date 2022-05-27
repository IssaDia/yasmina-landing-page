import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

describe("App tests", () => {
 it("should contain a layout", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Layout)).toHaveLength(1);
 });
 it("should contain a navbar", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Navbar)).toHaveLength(1);
 });
});
