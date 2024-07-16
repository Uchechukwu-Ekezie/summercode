import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaDatabase,
  FaPencilAlt,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

function WeOffer() {
  return (
    <section>
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-28 lg:py-16 lg:p">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="max-w-lg mx-auto text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Courses we Offer</h2>

            <p className="mt-4 text-gray-600">
              Explore our diverse range of courses designed to help you excel in
              your career. From web development to business management, we have
              something for everyone.
            </p>

            <Link
              to="/"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaCode />
              </span>

              <h2 className="mt-2 font-bold">Frontend Web Development</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Learn to build dynamic websites and applications using the
                latest technologies.
              </p>
            </Link>

            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaDatabase />
              </span>

              <h2 className="mt-2 font-bold">Backend Development</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Dive into server-side programming and learn how to manage
                databases and server logic.
              </p>
            </Link>

            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaPencilAlt />
              </span>

              <h2 className="mt-2 font-bold">UI/UX Design</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Master the principles of design and user experience to create
                visually appealing interfaces.
              </p>
            </Link>

            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaChartLine />
              </span>

              <h2 className="mt-2 font-bold">Data Science</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Learn to analyze and interpret complex data to make data-driven
                decisions.
              </p>
            </Link>

            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaCogs />
              </span>

              <h2 className="mt-2 font-bold">Product Management</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Discover strategies for managing product lifecycles and driving
                product success.
              </p>
            </Link>

            <Link
              className="block p-4 border border-gray-100 shadow-sm rounded-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              to="#"
            >
              <span className="inline-block p-3 text-2xl rounded-lg bg-gray-50">
                <FaShieldAlt />
              </span>

              <h2 className="mt-2 font-bold">Cyber Security</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Learn to protect systems and networks from cyber threats and
                attacks.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeOffer;
