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
        I am a highly driven professional with a diverse background in software engineering, project management and IT.
        I gained a solid foundation in creating efficient technological solutions using JavaScript, Python, HTML, CSS, SQL, and other technologies at Atlas School. I love applying responsive design principiles and watching my web pages shring into mobile screens and still look amazing.  I am committed to delivering efficient and effective software solutions.    
        I am a hardworking and lifelong learner who enjoys helping others navigate challenges in technology.  
        I eagerly embrace new challenges and seek opportunities in the industry to grow and expand my skills in IT, software development, cloud computing, and data analysis.
        I am self-motivated and always eager to learn new skills.
        </p>

        <br />

      </div>
    </div>
  );
};

// Export the About component
export default About;
