import React from "react";
import { Meta, Story } from "@storybook/react";
import Jumbotron from "../components/Jumbotron/index";

const meta: Meta = {
 title: "Jumbotron",
 component: Jumbotron,
};

export default meta;

const Template: Story = (args) => <Jumbotron {...args} />;

export const Default = Template.bind({});

// Default.args = {
//  children: "Click me",
//  className: "rounded-3xl p-2",
// };
