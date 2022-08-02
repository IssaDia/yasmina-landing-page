import React from "react";
// import PersonalSupportText from "./PersonalSupportText";
import mo2ipic2 from "../../assets/images/mo2i_pic2.jpeg";
import { Button } from "issa-react-component-library";
import { useCalendlyModal } from "../../hooks/useCalendlyModal";
import PersonalSupportCardsContainer from "./PersonalSupportCardsContainer/index";
import PersonalSupportCPF from "./PersonalSupportCPF";

const PersonalSupport: React.FC = () => {
 const [handleCalendlyModal] = useCalendlyModal();

 return (
  <>
   <div className="w-full xl:text-center xl:text-3xl flex s:flex-col md:flex-col lg:flex-col">
    <img
     src={mo2ipic2}
     className="w-full h-full object-fill"
     alt="photo du site de Yasmina Corman"
    />
    {/* <PersonalSupportText /> */}
    <PersonalSupportCardsContainer />
   </div>

   <PersonalSupportCPF />

   <div className="flex lg:flex-row s:flex-col">
    <div className="mx-auto">
     <Button
      className="text-sm p-4 bg-orange text-white font-bold border-2 hover:text-orange hover:bg-white hover:border-orange rounded-3xl xl:text-4xl"
      onClick={() => handleCalendlyModal}
      data-test="showCalendlyModal"
     >
      Booker mon entretien gratuit
     </Button>
    </div>
   </div>
  </>
 );
};

export default PersonalSupport;
