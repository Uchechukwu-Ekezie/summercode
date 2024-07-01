import React from "react";
import {
  FaClock,
  FaFolderOpen,
  FaShieldAlt,
  FaTag,
  
  FaRobot,
  FaCertificate,
  FaHandsHelping,
} from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";

function CourseChoose() {
  const feature = [
    {
      icon: <FaMedal />,
      title: "Certified Instructors",
      desc: "Our tutors are highly qualified professionals with expertise in their respective fields, ensuring top-notch learning experiences.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Child Safety",
      desc: "We prioritize the safety and well-being of your child with strict safety protocols and secure online learning environments.",
    },
    {
      icon: <FaTag />,
      title: "Best Price Offer",
      desc: "Quality education shouldn't break the bank. We offer competitive rates without compromising on excellence.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Post Program Mentorship",
      desc: "We will not leave your children hanging. Our tutors will follow up on your children’s progress after the summer.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Schedules",
      desc: "Learn from anywhere, anytime with our flexible scheduling and online platform that fits into your busy lifestyle.",
    },
    {
      icon: <FaFolderOpen />,
      title: "Comprehensive Curriculum",
      desc: "Covering a wide range of subjects and levels, from elementary to advanced courses, catering to diverse educational needs.",
    },
    {
      icon: <FaRobot />,
      title: "Technology-Driven",
      desc: "We leverage the latest technology to provide an engaging and effective learning experience for your child.",
    },
   
    {
      icon: <FaCertificate />,
      title: "Verified Certifications",
      desc: "Certificates will be handed out to students at the end of the tech summer training.",
    },
  ];

  return (
    <section className="text-black bg-[#cdd6ec]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose Us
          </h2>

          <p className="mt-4 text-black">
            Summer holidays are here, and Glitz Tutor is ready to keep your
            child engaged with our exciting tech summer program! Our highly
            qualified tutors are experts in their fields, providing top-notch
            learning experiences from the comfort of your home. Enjoy quality
            online education at competitive rates without compromising
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {feature.map((item, index) => (
            <div key={index} className="flex items-center p-8 space-x-4 transition border border-gray-800 shadow-xl rounded-xl hover:border-[#48758E] hover:shadow-[#48758E]">
              <div className="w-16 h-16 p-4 text-2xl bg-white rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/courses"
            className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default CourseChoose;
