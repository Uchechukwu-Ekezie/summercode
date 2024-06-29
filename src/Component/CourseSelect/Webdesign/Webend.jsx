import React from "react";
import { Link } from "react-router-dom";

function Webend() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto  px-4 py-20 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Master Web Development.
            <strong className="font-extrabold text-[#48758E] sm:block">
              {" "}
              Build Your Future.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Discover the world of web development and learn how to create
            amazing websites. Join us and start your coding journey today!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/enroll"
              className="block w-full rounded bg-[#48758E] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="block w-full rounded px-12 py-3 text-sm font-semibold shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Webend;
