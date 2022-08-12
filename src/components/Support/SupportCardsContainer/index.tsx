import React from "react";
import SupportCard from "../SupportCard/index";
import { cardData } from "../utils/cardData";

const SupportCardsContainer: React.FC = () => {
 return (
  <>
   <div className="grid lg:grid-cols-3 gap-4 m-4 sm:grid-cols-1 my-16">
    {cardData.map((card, index) => {
     return (
      <div key={index}>
       <SupportCard
        imageName={card.imageName}
        title={card.title}
        paragraphs={card.paragraphs}
       />
      </div>
     );
    })}
   </div>
  </>
 );
};

export default SupportCardsContainer;
