import React from "react";
// import PersonalSupportText from "./PersonalSupportText";
import mo2ipic2 from "../../assets/images/mo2i_pic2.jpeg";
import { Button } from "issa-react-component-library";
import SupportCardsContainer from "./SupportCardsContainer/index";
import SupportCPF from "./SupportCPF";
import { usCalendlyContext } from "../../App";

const Support: React.FC = () => {
 const { calendlyIsActive, setCalendlyIsActive } = usCalendlyContext();

 const handleCalendlyModal = () => {
  setCalendlyIsActive(!calendlyIsActive);
  return;
 };
 return (
  <>
   <div className="w-full xl:text-center xl:text-3xl flex items-center s:flex-col md:flex-col lg:flex-col">
    <img
     src={mo2ipic2}
     className="w-2/3"
     alt="photo du site de Yasmina Corman"
    />

    <SupportCardsContainer />
   </div>
   <div className="flex flex-row justify-center items-center">
    <SupportCPF />
   </div>

   <div className="flex lg:flex-row s:flex-col">
    <div className="mx-auto">
     <Button
      className="text-sm p-4 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
      onClick={handleCalendlyModal as () => void}
      data-test="showCalendlyModal"
     >
      Booker mon entretien gratuit
     </Button>
    </div>
   </div>
  </>
 );
};

export default Support;
