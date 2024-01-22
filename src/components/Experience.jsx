import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Docker from "../assets/Docker.png";
import linux from "../assets/linux.png";
import Python from "../assets/Python.png";
import Flask from "../assets/Flask.png";

// Experience Component
const Experience = () => {
  // Array of technologies with their details
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: Docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: Python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: Flask,
      title: "Flask",
      style: "shadow-white",
    },
  ];

  return (
    // Experience section with a gradient background
    <div
      name="experience"
      className="pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      {/* Container for centering content */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-20 pb-2">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        {/* Grid layout for displaying technologies */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:py-2 px-6 sm:mx-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              {/* Tech image */}
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// Export the Experience component
export default Experience;