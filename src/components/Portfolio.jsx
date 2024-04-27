import React from "react";
import MuseumImag from "../assets/portfolio/MuseumImag.jpg";
import SimpleShell from "../assets/portfolio/SimpleShell.jpg";
import AirbnbClone from "../assets/portfolio/AirbnbClone.jpg";
import BunkerBites from "../assets/portfolio/BunkerBites.jpg";
import ETL_Data from "../assets/portfolio/Extract_data.jpg";
import GalacticEatery from "../assets/portfolio/GalacticEatery.png"
import SmileJavaScript from "../assets/portfolio/SmileJavaScript.png"
import Headphones from "../assets/portfolio/headphones.png"

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
      src: ETL_Data,
      title: "ETL - The Joy Of Painting API",
      link: "https://github.com/carlalap/atlas-the-joy-of-painting-api",
    },
    {
      id: 3,
      src: GalacticEatery,
      title: "The Galactic Eatery",
      link: "https://github.com/carlalap/the-galactic-eatery",
    },
    {
      id: 4,
      src: SmileJavaScript,
      title: "Smiling School_JavaScript",
      link: "https://github.com/carlalap/holbertonschool-smiling-school-javascript",
    },
    {
      id: 5,
      src: BunkerBites,
      title: "Bunker Bites",
      link: "https://github.com/carlalap/Bunker_Bites",
    },
    {
      id: 6,
      src: Headphones,
      title: "Headphones",
      link: "https://github.com/carlalap/holbertonschool-headphones",
    },
    {
      id: 7,
      src: AirbnbClone,
      title: "Airbnb Clone",
      link: "https://github.com/carlalap/holbertonschool-AirBnB_clone_v4",
    },
    {
      id: 8,
      src: SimpleShell,
      title: "Simple Shell Project",
      link: "https://github.com/carlalap/holbertonschool-simple_shell",
    },
  ];

  return (
    // Portfolio section with a gradient background
    <div
      name="portfolio"
      className="bg-gradient-to-b bottom-2 from-black to-gray-800 w-full text-white min-h-screen"
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
                style={{ width: '400px', height: '200px' }}
              />
              {/* Project title with link */}
               <div className="flex items-center justify-center h-20">
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