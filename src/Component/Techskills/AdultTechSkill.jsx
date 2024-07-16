import React from "react";
import { Link } from "react-router-dom";

function AdultTechSkill() {
  const icn = [
    {
      id: "01",
      name: "Backend Web Development",
      img: "/Assets/Image/backendlld.jpg",
      desc: "Learn to build server-side web applications, work with databases, and create RESTful APIs using Node.js and Express.js.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "02",
      name: "Software Engineering",
      img: "/Assets/Image/softwareee.avif",
      desc: "Learn tech basics, create websites with HTML/CSS, use Git/GitHub, and learn JavaScript.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "04",
      name: "Cyber Security",
      img: "/Assets/Image/cyber.jpg",
      desc: "Understand fundamental cybersecurity concepts, protect systems from attacks, and gain knowledge in cryptography, network security, and ethical hacking.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "03",
      name: "Data Science",
      img: "/Assets/Image/datascience.jpg",
      desc: "Learn how to analyze data, create predictive models, and gain insights from large datasets using tools such as Python, R, and SQL.",
      path: "/adulthome/coursess/backenddev",
    },
    {
      id: "05",
      name: "Product Management",
      img: "/Assets/Image/product-management.jpg",
      desc: " Develop and manage products, understand market needs, create product roadmaps, and lead cross-functional teams.",
      path: "/adulthome/coursess/backenddev",
    },
  ];
  return (
    <div>
      <section className="py-20 text-black bg-[#cdd6ec]">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold">Courses We Offer</h2>
            <p className="mx-auto mt-4 text-lg font-bold text-[#302929]">
              We are committed to giving students access to amazing, quality and
              cutting-edge tech skills that will help secure their place in the
              future, regardless of their career paths.
            </p>
          </div>
          
          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {icn.map((course) => (
              <Link
              to={course.path}
            >
            <div
              key={course.id}
              className="flex flex-col overflow-hidden  bg-white rounded-lg shadow-md  transition rounded-lg shadow-xl  hover:border-white hover:shadow-[#212C58] h-auto"
            >
                
              <div className="relative overflow-hidden">
                <img
                  src={course.img}
                  alt={course.course}
                  className="object-cover w-full h-48 sm:h-64 lg:h-48"
                />
              </div>
              <div className="flex-1 p-6">
                <h2 className="mb-3 text-xl font-semibold">{course.name}</h2>
             
                <p className="mt-2 text-gray-700">{course.desc}</p>
              </div>
              <div className="p-6 pt-0">
              
              </div>
            </div>
                </Link>
          ))}
        </div>
        
        </div>
      </section>
    </div>
  );
}

export default AdultTechSkill;
