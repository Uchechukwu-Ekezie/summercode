import React from "react";
import Tech from "../../../Assets/aimachine.json";

import Lottie from "react-lottie";
import { Link } from "react-router-dom";

function AIHero() {
  return (
    <div className="pt-20">
      <section className="overflow-hidden bg-[#cdd6ec] sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              Kickstart Your Child’s AI Journey
            </h2>

            <p className="hidden text-black md:mt-4 md:block">
              Our engaging and hands-on AI bootcamp is designed to spark curiosity
              and teach fundamental AI concepts. Enroll today and watch your child
              create intelligent systems and applications!
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/enroll"
                className="inline-block rounded bg-[#48758E] px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
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
      </section>
    </div>
  );
}

export default AIHero;
