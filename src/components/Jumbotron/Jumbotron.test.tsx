import React from "react";
import { mount } from "enzyme";
import Image from "../Jumbotron/Image/index";

const wrapper = mount(<Image />);

describe("jumbotron tests", () => {
 it("must contains a picture", () => {
  expect(wrapper.find("img")).toBeTruthy();
 });
 it("renders a rounded picture", () => {
  expect(wrapper.find(".rounded-full")).toBeTruthy();
 });

 it("has alt information in image", () => {
  expect(wrapper.find("alt")).toBeTruthy();
 });

 it("has a source in image", () => {
  expect(wrapper.find("src")).toBeTruthy();
 });
});
