import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// SocialLinks component
const SocialLinks = () => {
  // Array of social links with details
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/carlalap",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:carlos3_alarcon@hotmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://rb.gy/x39j6b",
    },
  ];

  return (
    // Container for social links with a fixed position
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {/* Mapping through social links to display them */}
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id, child}
            className={
              "flex bg-blue-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            {/* Social link with child element (icon and text) */}
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Export the SocialLinks component
export default SocialLinks;