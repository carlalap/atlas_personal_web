import React from "react";
import HeroImage from "../assets/HeroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";

// Home component
const Home = () => {
    return (
        // Home section with a gradient background
        <div name="home" className="h-screen w-full bg-gradient-to-b 
        from-black via-black to-gray-800"
        >
            {/* Container for centering content */}
            <div className="max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
                {/* Left column with text content */}
                <div className="flex flex-col justify-center h-full">
                    {/* Title */}
                    <h2 className="text-4xl sm:text-7xl font-bold
                    text-white">
                        I am a full Stack Developer
                    </h2>
                    {/* Description */}
                    <p className="text-gray-400 py-4 max-w-md">
                    I am a future Full Stack Web Developer at Atlas School 
                    (formerly Holberton School) in Tulsa, OK. 
                    Take a look of my first web using
                    technologies like React and Tailwind.
                    </p>
                    {/* Portfolio link */}
                    <div>
                        <Link
                        to="portfolio"
                        smooth
                        duration={500}
                        className="text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                                <span className="hover:rotate-90 duration-300">
                                   < MdOutlineKeyboardArrowRight size={30}
                                   className="ml-1" /> 
                                </span>
                        </Link>
                    </div>
                </div>
                {/* Right column with image */}
                <div>
                    <img 
                    src={HeroImage}
                    alt="my profile"
                    className="rounde-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};
// Export the Home component
export default Home;