import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// NavBar component
const NavBar = () => {

    // State for controlling the visibility of mobile navigation
    const [nav, setNav] = useState(false);
    
    // Array of navigation links
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        {
          id: 5,
          link: "contact",
        },
      ];

    return (
      // Navigation bar container with a fixed position
        <div className="flex justify-between items-center w-full h-20 px-4
        text-white bg-black fixed">
          {/* Logo or site name */}
            <div>
                <h1 className="text-5xl font-sign ml-2">CA</h1>
            </div>

            {/* Desktop navigation links */}
            <ul className="hidden lg:flex">
                {links.map(({ id, link }) => (
                    <li 
                    key={id} 
                    className="px-4 cursor-pointer capitalize font-medium 
                    text-gray-500 hover:scale-105 duration-200"
                    >
                      {/* Scroll to the specified link on click */}
                      <Link to={link} smooth duration={500}>
                        {link}
                      </Link>
                    </li>
                ))}
            </ul>
            {/* Mobile navigation toggle button */}
            <div
                onClick={() => setNav(!nav)} 
                className="cursor-pointer pr-4 z-10 text-gray-500
                lg:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>

            {/* Mobile navigation links (visible when toggled) */}
            {nav && (

                <ul className="flex flex-col justify-central items-center absolute
                top-0 left-0 w-full h-screen bg-gradient-to-b 
                from-black to-gray-800 text-gray-500">
                {/* Mapping through links to display mobile navigation */}
                {links.map(({ id, link }) => (
                        <li key={id} 
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                        {/* Scroll to the specified link on click and
                        close mobile navigation */}
                        <Link
                          onClick={() => setNav(!nav)}
                          to={link}
                          smooth
                          duration={500}
                        >
                          {link} 
                        </Link> 
                        </li>
                    ))}
            
                </ul>         
            )}
        </div>
    );
};
// Export the NavBar component
export default NavBar;