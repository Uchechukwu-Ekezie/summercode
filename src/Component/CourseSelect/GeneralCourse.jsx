import React from "react";
import { Link } from "react-router-dom";

function GeneralCourse() {
  const courses = [
    {
      id: "01",
      course: "Artificial Intelligence & Machine Learning",
      pic: "/Assets/Image/web-dev.png",
      desc: "Learn how to build the server-side of web applications, work with databases, and create RESTful APIs using Node.js and Express.js.",
      path: "/courses/ai_machine",
    },
    {
      id: "02",
      course: "Frontend Development",
      pic: "/Assets/Image/webbevelop.png",
      desc: "Get introduced to the latest technologies in the tech field, create websites with HTML and CSS, work with Git and GitHub, and get into the world of programming by learning the basics of JavaScript.",
      path: "/courses/webdesign",
    },
    {
      id: "03",
      course: "Cyber Security",
      pic: "/Assets/Image/design.png",
      desc: "Understand the fundamental concepts of cybersecurity, learn how to protect systems and networks from cyber attacks, and gain knowledge in areas such as cryptography, network security, and ethical hacking.",
      path: "/courses/cyber-sec",
    },
    {
      id: "04",
      course: "Digital Media",
      pic: "/Assets/Image/digitalmarketing.png",
      desc: "Learn how to market products and services using digital technologies, work with social media platforms, and create online marketing campaigns.",
      path: "/courses/uiuxdesign",
    },
  ];

  return (
    <div className="py-10 bg-[#ffffff]">
      <div className="container px-4 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Courses We Offer</h1>
        <p className="mt-2 text-center text-gray-500">
          We are committed to giving students access to amazing, quality and
          cutting-edge tech skills that will help secure their place in the
          future, regardless of their career paths.
        </p>
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col overflow-hidden  bg-white rounded-lg shadow-md  transition rounded-lg shadow-xl  hover:border-white hover:shadow-[#212C58]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.pic}
                  alt={course.course}
                  className="object-cover w-full h-48 sm:h-64 lg:h-48"
                />
              </div>
              <div className="flex-1 p-6">
                <h2 className="mb-3 text-xl font-semibold">{course.course}</h2>
                <h2 className="font-semibold text-[17px]"><span style={{textDecoration: "line-through",
                                  color: "red",
                                  fontStyle: "italic",
                                  marginRight: "10px"
                }}>₦100,000</span> <span 
                >
                  ₦50,000</span></h2>
                <p className="mt-2 text-gray-700">{course.desc}</p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to={course.path}
                  className="block w-full px-4 py-2 text-center text-white transition-all bg-[#48758E] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeneralCourse;
