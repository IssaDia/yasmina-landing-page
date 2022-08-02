import React from "react";
import Mo2iCard from "../Mo2iCard";
import { cardData } from "../utils/cardData";

const Mo2iCardContainer: React.FC = () => {
 return (
  <>
   <div className="grid lg:grid-cols-3 gap-4 mx-4 sm:grid-cols-1 sm:space-y-8">
    {cardData.map((card, index) => {
     return (
      <div key={index}>
       <Mo2iCard
        imageName={card.imageName}
        title={card.title}
        subtitle={card.subtitle}
        content={card.content}
       />
      </div>
     );
    })}
   </div>
  </>
 );
};

export default Mo2iCardContainer;
