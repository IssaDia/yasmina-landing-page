import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../components/atoms/Button/index";

const meta: Meta = {
 title: "Button",
 component: Button,
 argTypes: {
  children: {
   defaultValue: "Click me",
  },
 },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
 // children: "Click me",
 className: "rounded-3xl p-2 bg-black text-white",
};
