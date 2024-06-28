import React from "react";
import { Link } from "react-router-dom";

function Uiend() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto px-4 py-20 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Master Digital Design.
            <strong className="font-extrabold text-yellow-500 sm:block">
              {" "}
              Build Your Future.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Discover the world of digital design and learn how to create stunning visual content. Join us and start your creative journey today!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/enroll"
              className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
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

export default Uiend;
