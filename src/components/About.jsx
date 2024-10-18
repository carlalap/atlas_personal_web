import React from "react";


// About component
const About = () => {
  return (
    // About section with a gradient background
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/* Container for centering content */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Content about professional path */}
        <p className="text-xl mt-20">
        Are you looking for a passionate and skilled software developer to bring
        your ideas to life? I am eager to apply my knowledge and skills to help 
        you create high-quality, functional, and visually engaging websites
        and web applications.

        I focus on clean code, modern design, and user-friendly functionality 
        to ensure that your project meets your business needs.
        </p>

        <br />

      </div>
    </div>
  );
};

// Export the About component
export default About;
