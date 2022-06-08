import React from "react";
import PersonalSupportText from "./PersonalSupportText";
import mo2ipic2 from "../../assets/images/mo2i_pic2.jpeg";

const PersonalSupport: React.FC = () => {
 return (
  <>
   <div className="w-full xl:text-center xl:text-3xl flex s:flex-col md:flex-row lg:flex-col">
    <img src={mo2ipic2} className="w-full h-full object-fill" />
    <PersonalSupportText />
   </div>
  </>
 );
};

export default PersonalSupport;
