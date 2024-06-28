import React from "react";
import './Hero.css'; 
import 'aos/dist/aos.css'// Make sure to import your CSS file

function CourseHero() {
  return (
    <section className="pt-32" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl" >
              Fast-track your journey into Tech
            </h2>

            <p className="mt-4 text-gray-600">
              Experience an interactive method of education and get ready for
              the job market of the future, With our tech-focused career
              programs, you’ll have the opportunity to work on real-world
              projects that are curated by industry professionals and tailored
              to the latest trends and developments in the tech industry.
            </p>

            <a
              href="/enroll"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-yellow-500 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Register now
            </a>
          </div>

          <div className="relative h-full rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Hero"
              src="/Assets/Image/herimg.png"
              className="absolute inset-0 object-cover w-full h-full animate-up-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
