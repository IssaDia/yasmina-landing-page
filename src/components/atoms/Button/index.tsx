import React from "react";

export interface Props {
 className?: string;
 datatest?: string;
 children: React.ReactNode;
 onClick?: () => void;
}
const Button = ({ children, ...props }: Props) => {
 return <button {...props}>{children}</button>;
};

export default Button;
