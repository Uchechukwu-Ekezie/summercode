import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import Tech from "../../../Assets/uiHero.json";

function UiHero() {
  return (
    <div className="pt-20 xl: ">
      <section class="overflow-hidden bg-yellow-500 sm:grid sm:grid-cols-2 sm:items-center ">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-black md:text-3xl  ">
              Kickstart Your Child’s Digital Design Journey
            </h2>

            <p class="hidden text-black md:mt-4 md:block ">
              Our fun and interactive digital design bootcamp is designed to
              inspire young minds and teach essential design skills. Enroll
              today and watch your child create stunning digital art!
            </p>

            <div class="mt-4 md:mt-8">
              <Link class="inline-block rounded bg-[#1b4344] px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                {" "}
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

export default UiHero;
