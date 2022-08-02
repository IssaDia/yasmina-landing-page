import React from "react";

interface PersonalSupportCardProps {
 imageName: string;
 title: string;
 paragraphs: string[];
}

const PersonalSupportCard: React.FC<PersonalSupportCardProps> = ({
 imageName,
 title,
 paragraphs,
}) => {
 return (
  <>
   <div className="border-transparent rounded shadow-lg grid justify-items-center h-full">
    <div className="pt-4">
     <img
      className="w-32 h-32"
      src={`./personalSupportAssets/cardImages/${imageName}.png`}
      alt=""
     />
    </div>
    <div>
     <p className="font-bold text-center my-4">{title}</p>
    </div>
    <div className="px-12 py-2">
     {paragraphs.map((paragraph, index) => {
      return (
       <div className="flex flex-row space-y-2 items-center" key={index}>
        <img
         src="./personalSupportAssets/icons/arrowCheckIcon.png"
         className="w-5 h-5 mr-2"
        />
        <p key={index}>{paragraph}</p>
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
};

export default PersonalSupportCard;
