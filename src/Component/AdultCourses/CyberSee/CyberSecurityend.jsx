import React from "react";
import { Link } from "react-router-dom";

function CyberSecurityend() {
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-20 mx-auto lg:flex lg:items-center">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Master Cybersecurity.
            <strong className="font-extrabold text-[#48758E] sm:block">
              {" "}
              Protect Your Future.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Discover the world of cybersecurity and learn how to protect systems
            and networks from digital attacks. Join us and start your journey to
            becoming a cybersecurity expert today!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/childrenhome/enroll"
              className="block w-full rounded bg-[#48758E] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="block w-full px-12 py-3 text-sm font-semibold rounded shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CyberSecurityend;
