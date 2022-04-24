import React from "react";
import { Navbar } from "./Navbar";

const Layout: React.FC = () => {
 return (
  <div className="container-fluid flex flex-col font-poppins h-screen">
   <Navbar />
  </div>
 );
};

export default Layout;
