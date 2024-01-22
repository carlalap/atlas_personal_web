import React from "react";
import MuseumImag from "../assets/portfolio/MuseumImag.jpg";
import SimpleShell from "../assets/portfolio/SimpleShell.jpg";
import AirbnbClone from "../assets/portfolio/AirbnbClone.jpg";
import BunkerBites from "../assets/portfolio/BunkerBites.jpg";

// Portfolio component
const Portfolio = () => {
  // Array of portfolio projects with details
  const portfolios = [
    {
      id: 1,
      src: MuseumImag,
      title: "Museum of Imagination",
      link: "https://museum-city-ae231.web.app/",
    },
    {
      id: 2,
      src: AirbnbClone,
      title: "Airbnb Clone",
      link: "https://github.com/carlalap/holbertonschool-AirBnB_clone_v4",
    },
    {
      id: 3,
      src: SimpleShell,
      title: "Simple Shell Project",
      link: "https://github.com/carlalap/holbertonschool-simple_shell",
    },
    {
      id: 4,
      src: BunkerBites,
      title: "Bunker Bites",
      link: "https://github.com/carlalap/Bunker_Bites",
    },
    {
      id: 5,
      src: SimpleShell,
      title: "Still in development",
      link: "www.indevelopment.com",
    },
    {
      id: 6,
      src: SimpleShell,
      title: "Still in development",
      link: "www.indevelopment.com",
    },
  ];

  return (
    // Portfolio section with a gradient background
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      {/* Container for centering content */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* Title and description */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* Grid layout for displaying portfolio projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {/* Mapping through projects to display them */}
          {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-green-600 rounded-lg">
               {/* Project image */}
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* Project title with link */}
               <div className="flex items-center justify-center">
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  {title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// Export the Portfolio component
export default Portfolio;