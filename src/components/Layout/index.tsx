import React from "react";
import { usCalendlyContext } from "../../App";
import { CalendlyModal } from "../Calendly";
import Footer from "../Footer";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";

const Layout: React.FC = ({ children }) => {
 const { calendlyIsActive } = usCalendlyContext();

 return (
  <>
   <div className="font-poppins container-fluid">
    <Navbar />
    {calendlyIsActive && <CalendlyModal />}
    <Jumbotron />
    {children}
    <Footer></Footer>
   </div>
  </>
 );
};

export default Layout;
