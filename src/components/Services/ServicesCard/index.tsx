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
   <div className="h-full flex flex-col align-items-center items-center mt-8">
    <div className="flex flex-col text-center h-12">
     <p className={` font-bold text-2xl } `}>{title}</p>
     <p className="text-sm">{subtitle}</p>
    </div>
    <div className="mt-8">
     <img
      className="w-28 h-28"
      src={`./mo2iAssets/cardImages/${imageName}.png`}
      alt=""
     />
    </div>
    <div className="px-24 py-2 mt-4 w-full">
     {content.map((item, index) => {
      return (
       <div className="flex flex-row space-y-2" key={index}>
        <img
         src={`./mo2iAssets/icons/${item.icon}.png`}
         className="w-4 h-4 mr-2 mt-[10px]"
        />
        <p key={index} className="text-md">
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
