import React from "react";
import PersonalSupportCard from "../PersonalSupportCard";
import { cardData } from "../utils/cardData";

const PersonalSupportCardsContainer: React.FC = () => {
 return (
  <>
   <div className="grid lg:grid-cols-3 gap-4 m-12 sm:grid-cols-1">
    {cardData.map((card, index) => {
     return (
      <div key={index}>
       <PersonalSupportCard
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

export default PersonalSupportCardsContainer;
