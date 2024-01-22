import React from "react";

// Contact component
const Contact = () => {
  return (
    // Contact section with a gradient background
    <div
      name="contact"
      className="w-full relative bottom-0 bg-gradient-to-b from-black to-gray-800 pb-24 text-white sm:pt-20"
    >
      {/* Container for centering content */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        {/* Form section */}
        <div className=" flex justify-center items-center">
          {/* Form with action, method, and styling */}
          <form
            action="https://getform.io/f/346c7d8c-f65a-4d79-ba79-93a22111cb29"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 mx-auto"
          >
            {/* Input for name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {/* Input for email */}
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {/* Textarea for message */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            {/* Submit button */}
            <button 
              className="text-white bg-gradient-to-b from-cyan-500
              to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
              rounded-md hover:scale-110 duration-300"
              >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
// Export the Contact component
export default Contact;