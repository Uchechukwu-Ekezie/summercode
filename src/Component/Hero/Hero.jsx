import React from "react";
import Tech from "../../Assets/Tech.json";

import Lottie from "react-lottie";

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
            <a
              href="/courses"
              className="inline-block px-4 py-2  mt-8 font-semibold transition bg-pink-500 rounded-xl textwhite botext-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
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

<section className="bg-yellow-500 pt-28">
  <div className="flex max-w-screen-xl px-4 py-8 mx-auto sm:flex-col sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-24">
        <h2 className="text-4xl font-bold leading-10 tracking-normal text-pretty sm:text-4xl">
          Give Your <span className="bg-pink-400">Kids</span> the Skills to{" "}
          <br />
          Prepare them for the <span className="bg-green-300">Future.</span>
        </h2>

        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          href="/"
          className="inline-block px-12 py-3 mt-8 font-bold text-white transition bg-pink-500 rounded-full botext-sm hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Tech,
        }}
        height={500}
        width={500}
        animationData={Tech}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  </div>
</section>;
