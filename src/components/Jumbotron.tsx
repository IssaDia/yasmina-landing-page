import React from "react";

const Jumbotron: React.FC = () => {
 return (
  <div className="bg-home-hero bg-cover bg-no-repeat h-[800Px] lg:h-screen flex flex-col">
   <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center mt-24">
     <h1 className="sm:text-8xl text-4xl font-playlist">Yasmina Corman</h1>
     <p className="mt-6 text-xs md:text-4xl font-lora font-light">
      {" "}
      réussir et briller en toute confiance
     </p>
    </div>
    <div className="flex flex-col lg:flex lg:flex-row lg:justify-start p-10 lg:p-20 justify-center items-center">
     <h2 className="md:text-2xl lg:text-4xl font-lora font-thin leading-snug">
      <b>Amputée</b> de l&rsquo;expression de ta <b>créativité</b> <br></br>
      et de ta <b>singularité ?</b> <br></br> Je t&rsquo;accompagne à exprimer
      qui tu es !
     </h2>
    </div>
   </div>
  </div>
 );
};

export default Jumbotron;
