import React from "react";
import CountDown from "../Countdown/CountDowun";
import { Link } from "react-router-dom";
import { FaPercentage } from "react-icons/fa";

function Banner() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-full lg:h-full">
            <img
              alt="Tech Event"
              src="/Assets/Image/Layer 1.png"
              className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg sm:p-16 lg:p-24">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
              🚀 Summer Training Registration Countdown! 🚀
            </h2>
            <p className="mb-8 text-gray-600">
              Are you ready to take the next step in your tech career? Our training is the perfect opportunity to learn, grow, and excel in your chosen field.
            </p>
            <p className="mb-8 text-xl font-semibold text-gray-800">
              ⏳ Registration Closes On: <CountDown />
            </p>

            {/* Discount Section */}
            <div className="px-6 py-8 text-slate-200 bg-[#48758E]  rounded-lg shadow-lg">
              <div className="flex flex-col items-center justify-between lg:flex-col">
                <div className="flex items-center mb-4 space-x-4 lg:mb-0">
                  <FaPercentage className="text-5xl text-white" />
                  <div>
                    <h2 className="text-3xl font-bold sm:text-4xl">
                      50% Discount on All Courses!
                    </h2>
                    <p className="mt-2 text-lg">
                      Summer special offer! Enroll now and enjoy a massive 50% discount on all our courses.
                    </p>
                  </div>
                </div>
                <Link
                  to="/enroll"
                  className="inline-block  p-3  text-sm mt-3 font-medium text-white transition bg-pink-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
