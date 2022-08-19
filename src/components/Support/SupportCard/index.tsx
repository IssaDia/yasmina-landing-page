import React from "react";

interface SupportCardProps {
 imageName: string;
 title: string;
 paragraphs: string[];
}

const SupportCard: React.FC<SupportCardProps> = ({
 imageName,
 title,
 paragraphs,
}) => {
 return (
  <>
   <div className="border-transparent rounded shadow-lg flex flex-col items-center h-full space-y-8 pb-12">
    <div className="mt-8">
     <img
      className="w-48 h-48"
      src={`./personalSupportAssets/cardImages/${imageName}.png`}
      alt=""
     />
    </div>
    <div className="h-6">
     <p className="font-bold text-center w-full">{title}</p>
    </div>
    <div className="px-8">
     {paragraphs.map((paragraph, index) => {
      return (
       <div className="flex flex-row space-y-2 items-center" key={index}>
        <img
         src="./personalSupportAssets/icons/arrowCheckIcon.png"
         className="w-4 h-4 mr-2 mt-[10px]"
        />
        <p className="text-sm" key={index}>
         {paragraph}
        </p>
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
};

export default SupportCard;
