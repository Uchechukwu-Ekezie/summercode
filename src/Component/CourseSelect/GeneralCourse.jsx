import React from "react";

function GeneralCourse() {
  const courses = [
    {
      id: "01",
      course: "Frontend Development",
      pic: "/Assets/Image/webbevelop.png",
      desc: "Get introduced to the latest technologies in the tech field, create websites with HTML and CSS, work with Git and GitHub, and get into the world of programming by learning the basics of JavaScript.",
      path: "/courses/webdesign",
    },
    {
      id: "02",
      course: "Backend Development",
      pic: "/Assets/Image/web-dev.png",
      desc: "Learn how to build the server-side of web applications, work with databases, and create RESTful APIs using Node.js and Express.js.",
      path: "/",
    },
    {
      id: "03",
      course: "Mobile Development",
      pic: "/Assets/Image/app-development.png",
      desc: "Get introduced to the world of mobile development, learn how to build mobile applications for both Android and iOS devices using Flutter.",
      path: "/",
    },
    {
      id: "04",
      course: "UI/UX Design",
      pic: "/Assets/Image/design.png",
      desc: "Learn how to design user interfaces and user experiences for web and mobile applications, work with design tools like Figma and Adobe XD.",
      path: "/",
    },
    // create for cybersecurity digital marketing 
    
    {
        id: "05",
        course: "Machine Learning",
        pic: "/Assets/Image/machine-learning.png",
        desc: "Learn how to secure web applications, work with encryption, and secure data using the latest technologies in the cybersecurity field.",
        path: "/"
    },
    {
        id: "06",
        course: "Digital Marketing",
        pic: "/Assets/Image/digitalmarketing.png",
        desc: "Learn how to market products and services using digital technologies, work with social media platforms, and create online marketing campaigns.",
        path: "/"
    }
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Our Courses</h1>
        <p className="mt-2 text-center text-gray-500">
          Choose the course that best suits you
        </p>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="relative bg-white rounded-lg shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.pic}
                  alt={course.course}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{course.course}</h2>
                <p className="mt-2 text-gray-700">{course.desc}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={course.path}
                  className="block w-full px-4 py-2 text-center text-white transition-all bg-yellow-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeneralCourse;
