import React from "react";
import bgImage from "../../../src/Assets/bg.webp"; // Import image
import "./AdultHero.css";
import { Link } from "react-router-dom";

const AdultHero = () => {
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-75 sm:bg-opacity-0 sm:bg-gradient-to-r from-white via-transparent to-white"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Welcome to
            <strong className="block font-extrabold text-rose-700">
            Glitz Tutors.
            </strong>
          </h1>

          <p className="max-w-lg mt-4 text-lg text-gray-700 sm:text-xl">
            Empowering adults with the latest tech skills to thrive in a digital world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 sm:justify-start">
            <Link
              to="#"
              className="block w-full px-12 py-3 text-sm font-medium text-white transition duration-300 rounded shadow bg-[#48758E] hover:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-300 active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              to="#"
              className="block w-full px-12 py-3 text-sm font-medium transition duration-300 bg-white rounded shadow text-[#48758E] hover:text-rose-700 focus:outline-none focus:ring focus:ring-rose-300 active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdultHero;
