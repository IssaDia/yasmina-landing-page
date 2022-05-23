import React from "react";

export interface Props {
 className?: string;
 dataTest?: string;
 children: React.ReactNode;
 onClick?: () => void;
}
const Button = ({ children, ...props }: Props) => {
 console.log(props);

 return <button {...props}>{children}</button>;
};

export default Button;
