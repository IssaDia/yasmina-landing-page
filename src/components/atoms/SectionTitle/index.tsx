import React from "react";

interface SectionTitleProps {
 title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
 title,
}: SectionTitleProps) => {
 return (
  <h3 className="font-playlist lg:text-5xl capitalize m-12 text-center s:text-3xl">
   {title}
  </h3>
 );
};

export default SectionTitle;
