import React from "react";

// interface HoverProps {
//  textColor?: string;
//  backgroundColor?: string;
//  borderWidth?: string;
// }

// export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
//  borderRadius?: string;
//  fontSize?: string;
//  textColor?: string;
//  hover?: HoverProps;
//  borderWidth?: string;
//  fontWeight?: string;
//  backgroundColor?: string;
//  padding?: string;
//  onClick: () => void;
//  dataTest?: string;
// }

export interface Props {
 className?: string;
 children: React.ReactNode;
 onClick: () => void;
}
export const Button = ({ className, children, onClick }: Props) => {
 return (
  <button className={className} onClick={onClick}>
   {children}
  </button>
 );
};
