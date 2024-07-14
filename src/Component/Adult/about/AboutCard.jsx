import React from "react";
import "./about.css";
import { homeAbout } from "../../../dummydata";
import Awrapper from "./Awrapper";
import Heading from "../../common/heading/Heading";
import aboutImage from "../../..//Assets/about.webp";

const AboutCard = () => {
  return (
    <>
      <section className="py-10 bg-gray-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="w-full p-4 md:w-1/2">
            <img src={aboutImage} alt="About" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full p-4 md:w-1/2">
            <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="mt-6 space-y-6">
              {homeAbout.map((val, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16">
                    <img src={val.cover} alt={val.title} className="object-cover w-full h-full rounded-full" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{val.title}</h2>
                    <p className="text-gray-600">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
