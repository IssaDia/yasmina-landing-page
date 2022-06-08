import React from "react";

const Layout: React.FC = ({ children }) => {
 return (
  <>
   <div className="font-poppins container-fluid">{children}</div>
  </>
 );
};

export default Layout;
