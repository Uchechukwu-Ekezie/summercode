import React from "react";
import { Link } from "react-router-dom";

function Herod() {
  return (
    <section className="overflow-hidden bg-[#48758E] text-white sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-4xl font-bold md:text-4xl">
            Investing in Knowledge and{" "}
            <span className="text-purple-500">Your Future</span>
          </h2>

          <p className="md:mt-4 md:block">
            Relevant vocational training that can provide people, especially
            youth, with the knowledge, skills and competencies required for the
            jobs of today or tomorrow, We offer a range of beauty courses, Our
            tutors are highly qualified and experienced, so you can be sure to
            receive the best training available.
          </p>

          <div className="flex mt-4 md:mt-8 lg:flex-row lg:justify-center lg:items-center">
            <Link
              to="/"
              className="inline-block px-4 py-2 text-sm font-semibold text-center text-white transition bg-pink-500 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 lg:mr-9"
            >
              Get Started Today
            </Link>
            <div className="flex ml-5 space-x-4 ">
              <div>
                <h3 className="text-[20px] font-bold mb-[-6px]">10+</h3>
                <p className="text-[12px]">Career Courses</p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold mb-[-6px]">2k+</h3>
                <p className="text-[12px]">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="/Assets/Image/happy-african-american-.avif"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}

export default Herod;
