import React from "react";
import Tech from "../../Assets/Tech.json";

import Lottie from "react-lottie";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#cdd6ec] pt-24">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-24">
            <h2 className="text-4xl font-bold leading-10 tracking-normal text-pretty sm:text-4xl">
              Give Your <span className="text-pink-500">Kids</span> the Skills
              to <br />
              Prepare them for the{" "}
              <span className="text-green-700">Future.</span>
            </h2>
            <p className="mt-4">
              Learning to code unlocks the incredible world of technology for
              your children. Instead of just being consumers, they can become
              creators. Have you noticed how those who create technology often
              shape the world? Think about Facebook, Microsoft, Amazon, and
              Twitter—billion-dollar companies that started as simple apps.
              Their founders, Mark Zuckerberg, Bill Gates, Jeff Bezos, and Jack
              Dorsey, all learned to code before they turned 15. Equip your kids
              with the skills they need to shape the future.
            </p>
            <Link
              to="/courses"
              className="inline-block px-4 py-2 mt-8 font-semibold transition bg-pink-500 rounded-xl textwhite botext-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
            
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Tech,
              }}
              height={350}
              width={600}
              animationData={Tech}
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


