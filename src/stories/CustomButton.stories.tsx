import React from "react";
import { Meta, Story } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { Button, Props } from "../components/atoms/Button/index";

const meta: Meta = {
 title: "Button",
 component: Button,
};

export default meta;

const Template: Story<Props> = (args, props) => <Button {...args} {...props} />;

export const Secondary = Template.bind({});

// Secondary.args = {
//  children: "Click me",
//  borderRadius: "rounded-3xl",
//  fontSize: "text-sm",
//  textColor: "text-white",
//  fontWeight: "font-bold",
//  backgroundColor: "bg-orange",
//  borderWidth: "border-2",
//  padding: "p-2",
// };

// export const Default: React.FC<ButtonProps> = ({ children = "Click me" }) => (
//  <Button onClick={action("clicked")}>{children}</Button>
// );
