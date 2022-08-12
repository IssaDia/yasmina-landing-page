import React from "react";
import ServicesCard from "../ServicesCard";
import { cardData } from "../utils/cardData";

const ServicesCardContainer: React.FC = () => {
 return (
  <>
   <div className="grid lg:grid-cols-3 gap-4 mx-4 sm:grid-cols-1 sm:space-y-8 mt-8">
    {cardData.map((card, index) => {
     return (
      <ServicesCard
       key={index}
       imageName={card.imageName}
       title={card.title}
       subtitle={card.subtitle}
       content={card.content}
      />
     );
    })}
   </div>
  </>
 );
};

export default ServicesCardContainer;
