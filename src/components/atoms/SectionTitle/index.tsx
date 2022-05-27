import React from "react";

interface SectionTitleProps {
 title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
 title,
}: SectionTitleProps) => {
 return (
  <h3 className="font-playlist text-5xl capitalize m-12 text-center">
   {title}
  </h3>
 );
};

export default SectionTitle;
