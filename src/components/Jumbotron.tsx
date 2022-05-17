import React from "react";
import profileImage from "../assets/images/profil-pic-yasmina.png";

const Jumbotron: React.FC = () => {
 return (
  <div className="bg-home-hero bg-cover bg-no-repeat h-[800Px] lg:h-screen flex flex-col">
   <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center mt-24">
     <h1 className="s:text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-playlist">
      Yasmina Corman
     </h1>
     <p className="s:text-xs sm:text-sm md:text-base lg:text-2xl s:mt-2 lg:mt-6  font-lora font-light tracking-widest">
      réussir et briller en toute confiance
     </p>
    </div>
    <div className="flex s:flex-col md:flex-row s:items-center md:text-center">
     <p className="s:text-base sm:text-lg md:text-xl lg:text-4xl 2xl:text-6xl s:mt-14 leading-loose">
      <b>Amputée</b> de l&rsquo;expression de ta <b>créativité</b> <br></br>
      et de ta <b>singularité ?</b> <br></br> Je t&rsquo;accompagne à exprimer
      qui tu es !
     </p>
     <img
      className="rounded-full h-64 w-64"
      role="jumbotronImage"
      alt="Yasmina Corman picture"
      src={profileImage}
     />
    </div>
   </div>
  </div>
 );
};

export default Jumbotron;
