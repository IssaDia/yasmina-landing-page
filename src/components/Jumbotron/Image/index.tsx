import React from "react";
import profileImage from "../../../assets/images/profil-pic-yasmina.png";

const Image: React.FC = () => {
 return (
  <img
   className="rounded-full s:h-48 md:w-64 md:h-64 s:w-48 xl:h-96 xl:w-96"
   role="jumbotronImage"
   alt="Yasmina Corman picture"
   src={profileImage}
  />
 );
};

export default Image;
