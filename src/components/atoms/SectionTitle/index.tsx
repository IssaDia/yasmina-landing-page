import React from "react";

interface SectionTitleProps {
 title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
 title,
}: SectionTitleProps) => {
 return (
  <div className="">
   <h3 className="font-playlist lg:text-5xl capitalize m-8 text-center s:text-3xl xl:text-6xl">
    {title}
   </h3>
  </div>
 );
};

export default SectionTitle;
