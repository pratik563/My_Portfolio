import React from "react";

const SkillsCard = ({ src, skill }) => {
  return (
    <span className="flex items-center gap-4">
      <img className="w-8" src={src} alt={`${src} icon`} />
      <p className="text-lg">{skill}</p>
    </span>
  );
};

export default SkillsCard;
