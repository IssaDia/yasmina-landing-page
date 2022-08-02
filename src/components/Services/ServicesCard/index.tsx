import React from "react";

interface Mo2iCardProps {
 imageName: string;
 title: string;
 subtitle?: string;
 content: Mo2iCardContentProps[];
}

interface Mo2iCardContentProps {
 icon: string;
 text: string;
}

const Mo2iCard: React.FC<Mo2iCardProps> = ({
 imageName,
 title,
 subtitle,
 content,
}) => {
 return (
  <>
   <div className="h-full flex flex-col align-items-center items-center">
    <div className="flex flex-col text-center">
     <p className={` font-bold text-2xl ${subtitle ? "mt-14" : ""} `}>
      {title}
     </p>
     <p className="text-sm">{subtitle}</p>
    </div>
    <div className="">
     <img
      className="w-28 h-28"
      src={`./mo2iAssets/cardImages/${imageName}.png`}
      alt=""
     />
    </div>
    <div className="px-12 py-2">
     {content.map((item, index) => {
      return (
       <div className="flex flex-row space-y-2 items-end" key={index}>
        <img
         src={`./mo2iAssets/icons/${item.icon}.png`}
         className="w-5 h-5 mr-2"
        />
        <p key={index} className="text-sm">
         {item.text}
        </p>
       </div>
      );
     })}
    </div>
   </div>
  </>
 );
};

export default Mo2iCard;
