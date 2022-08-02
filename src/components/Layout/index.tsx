import React from "react";
import { useCalendlyModal } from "../../hooks/useCalendlyModal";
import { CalendlyModal } from "../Calendly";
import Footer from "../Footer";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";

const Layout: React.FC = ({ children }) => {
 const [calendlyModalIsActive, handleCalendlyModal] = useCalendlyModal();

 console.log("layouyt", calendlyModalIsActive);

 return (
  <>
   <div className="font-poppins container-fluid">
    <Navbar handleShow={handleCalendlyModal as () => void} />
    {calendlyModalIsActive && (
     <CalendlyModal
      show={calendlyModalIsActive as boolean}
      handleShow={handleCalendlyModal as () => void}
     />
    )}
    <Jumbotron />
    {children}
    <Footer></Footer>
   </div>
  </>
 );
};

export default Layout;
