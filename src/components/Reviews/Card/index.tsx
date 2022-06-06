import React from "react";

import { getScore } from "../utils/getScore";

interface ReviewProps {
 name: string;
 review: string;
 imageSrc: string | null;
 stars: number;
}

const Review: React.FC<ReviewProps> = ({
 name,
 imageSrc,
 review,
 stars,
}: ReviewProps) => {
 return (
  <>
   <div className="w-full m-5 flex flex-col justify-items-center items-center">
    <div className=" h-32 w-32 xl:h-96 xl:w-96 m-4">
     <img
      className="rounded-full h-32 w-32 xl:h-96 xl:w-96 cursor-pointer drop-shadow-lg"
      src={`${
       imageSrc
        ? imageSrc
        : "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png"
      }`}
     />
    </div>
    <div className="p-6 w-[90%] rounded-xl flex flex-col items-center bg-greyCustom drop-shadow-lg cursor-pointer">
     <h5 className="text-gray-900 text-xl font-medium m-2 font-lora xl:text-4xl">
      {name}
     </h5>
     <div className="m-4">{getScore(stars)}</div>
     <p className="text-gray-500 text-sm font-lora xl:text-4xl">{review}</p>
    </div>
   </div>
  </>
 );
};

export default Review;
