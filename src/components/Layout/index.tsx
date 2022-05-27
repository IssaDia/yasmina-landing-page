import React from "react";

const Layout: React.FC = ({ children }) => {
 return (
  <>
   <div className="font-poppins h-screen m-0">{children}</div>
  </>
 );
};

export default Layout;
