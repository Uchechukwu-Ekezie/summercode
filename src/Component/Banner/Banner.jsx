import React from "react";
import CountDown from "../Countdown/CountDowun";

function Banner() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-96 lg:h-full md:h-96  ">
              <img
                alt=""
                src="/Assets/Image/Black Green Professional Technology Event Flyer (1).pdf.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 sm: pt-8">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                🚀 Bootcamp Registration Countdown! 🚀
              </h2>

              <p className="mt- text-gray-600">
                Are you ready to take the next step in your tech career? Our
                bootcamp is the perfect opportunity to learn, grow, and excel in
                your chosen field.
              </p>
              <p className="mt-11">⏳ Registration Opens In: <CountDown/>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
