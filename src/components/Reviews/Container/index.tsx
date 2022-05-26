import React from "react";
import Review from "../Card";
import { infos as cardsInfo } from "../utils/reviewsInfos";

type SingleInfosType = {
 name: string;
 review: string;
 imageSrc: string | null;
 stars: number;
};

const Reviews: React.FC = () => {
 const cards = cardsInfo.map((card: SingleInfosType, index: number) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const image: string =
   card.imageSrc &&
   require(`../../../assets/images/reviews/${card.imageSrc}.jpeg`);
  return (
   <Review
    key={index}
    name={card.name}
    review={card.review}
    imageSrc={image}
    stars={card.stars}
   />
  );
 });

 return (
  <>
   <div className="">
    <div className="text-center">
     <h2 className="m-20 font-playlist text-6xl">Témoignages</h2>
    </div>
    <div className="bg-white">{cards}</div>;
   </div>
  </>
 );
};

export default Reviews;
