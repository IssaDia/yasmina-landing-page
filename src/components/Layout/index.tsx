import React from "react";

const Layout: React.FC = ({ children }) => {
 return (
  <>
   <div className="container-fluid flex flex-col font-poppins h-screen">
    {children}
   </div>
  </>
 );
};

export default Layout;
