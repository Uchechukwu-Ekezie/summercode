import React from "react";
import { Link } from "react-router-dom";

function AdultGeneralCourses() {
  const courses = [
    {
      id: "01",
      course: "Backend Web Development",
      pic: "/Assets/Image/backendlld.jpg",
      desc: "Learn how to build the server-side of web applications, work with databases, and create RESTful APIs using Node.js and Express.js.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "02",
      course: "Software Engineering",
      pic: "/Assets/Image/softwareee.avif",
      desc: "Get introduced to the latest technologies in the tech field, create websites with HTML and CSS, work with Git and GitHub, and get into the world of programming by learning the basics of JavaScript.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "04",
      course: "Cyber Security",
      pic: "/Assets/Image/cyber.jpg",
      desc: "Understand the fundamental concepts of cybersecurity, learn how to protect systems and networks from cyber attacks, and gain knowledge in areas such as cryptography, network security, and ethical hacking.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "03",
      course: "Data Science",
      pic: "/Assets/Image/datascience.jpg",
      desc: "Learn how to analyze data, create predictive models, and gain insights from large datasets using tools such as Python, R, and SQL.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "05",
      course: "Product Management",
      pic: "/Assets/Image/product-management.jpg",
      desc: "Learn how to develop and manage products, understand market needs, create product roadmaps, and lead cross-functional teams to bring products to market.",
      path: "/adulthome/coursess/backenddev",
    },
  ];

  return (
    <div className="py-10 bg-[#ffffff]">
      <div className="container px-4 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Courses We Offer</h1>
        <p className="mt-2 text-center text-gray-500">
          We are committed to giving students access to amazing, quality, and
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
                <h2 className="font-semibold text-[17px]">
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      fontStyle: "italic",
                      marginRight: "10px",
                    }}
                  >
                    ₦200,000
                  </span>
                  <span>₦150,000</span>
                </h2>
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

export default AdultGeneralCourses;
