import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // Adjust this value to match your navbar's height
    if (section) {
      const topPosition = section.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close the menu on mobile after clicking
    }
  };

  return (
    <div className="sticky top-0 z-50 container rounded-md bg-gradient-to-tr from-[#2ea5a5] to-[#13a7a7] text-white mx-auto flex justify-between items-center px-4 py-3">
      <div className="text-2xl font-bold">My Portfolio</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block sm:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      <ul
        className={`flex flex-col sm:flex-row rounded-md sm:space-x-8 absolute sm:static bg-gradient-to-tr from-[#2ea5a5] to-[#13a7a7] w-full sm:w-auto transition-all duration-300 ${
          isOpen ? "top-12 left-0" : "top-[-200px]"
        }`}
      >
        <li
          className="px-4 py-2 sm:p-0 hover:text-gray-600 cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Home
        </li>
        <li
          className="px-4 py-2 sm:p-0 hover:text-gray-600 cursor-pointer"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </li>
        <li
          className="px-4 py-2 sm:p-0 hover:text-gray-600 cursor-pointer"
          onClick={() => handleScroll("skills")}
        >
          Skills
        </li>
        <li
          className="px-4 py-2 sm:p-0 hover:text-gray-600 cursor-pointer"
          onClick={() => handleScroll("certificate")}
        >
          Certificate
        </li>
        <li
          className="px-4 py-2 sm:p-0 hover:text-gray-600 cursor-pointer"
          onClick={() => handleScroll("contact")}
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
