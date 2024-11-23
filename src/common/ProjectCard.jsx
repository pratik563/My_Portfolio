import React from "react";

const ProjectCard = ({ src, link, h3, p }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
    >
      <img
        src={src}
        alt={`${h3} logo`}
        className="w-52 rounded-lg mb-4 shadow-lg"
      />
      <h3 className="text-xl font-semibold mb-2">{h3}</h3>
      <p className="text-gray-600">{p}</p>
    </a>
  );
};

export default ProjectCard;
