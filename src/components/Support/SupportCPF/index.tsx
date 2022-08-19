import React from "react";

const SupportCPF: React.FC = () => {
 return (
  <>
   <div className="flex lg:flex-row s:flex-col justify-center items-center space-x-2 mx-24 mb-8">
    <div className="lg:w-2/12 s:w-full">
     <img className="w-52 h-40" src="./personalSupportAssets/cpf.png" alt="" />
    </div>
    <div className="lg:w-10/12 s-w-full flex flex-col space-y-4 lg:text-xl s:text-sm">
     <p>
      Certains de nos programmes sont éligibles au financement CPF sous
      conditions.
     </p>
     <p>
      Pour le financement CPF, <span>Contactez moi sur</span>{" "}
      <span className="text-roseDark">
       {" "}
       <a href="mailto:yasminacorman@gmail.com">yasminacorman@gmail.com</a>
      </span>{" "}
      ou au{" "}
      <span className="text-roseDark">
       <a href="tel:0760433609">07.60.43.36.09</a>
      </span>
     </p>
    </div>
   </div>
  </>
 );
};

export default SupportCPF;
