import React from "react";

const PersonalSupportCPF: React.FC = () => {
 return (
  <>
   <div className="flex lg:flex-row s:flex-col justify-center items-center space-x-2 mx-24 mb-8">
    <div className="w-2/12">
     <img
      className="lg:w-32 lg:h-32 s:w-28 s:h-28"
      src="./personalSupportAssets/cpf.png"
      alt=""
     />
    </div>
    <div className="w-10/12 flex flex-col space-y-4 lg:text-xl s:text-sm">
     <p>
      Certains de nos programmes sont éligibles au financement CPF sous
      conditions.
     </p>
     <p>
      Pour le financement CPF, <span>Contactez moi</span>
      <span className="text-salmon">yasminacorman@gmail.com</span> ou au{" "}
      <span className="text-salmon">07.60.43.36.09</span>
     </p>
    </div>
   </div>
  </>
 );
};

export default PersonalSupportCPF;
