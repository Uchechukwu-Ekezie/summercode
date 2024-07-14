import React from "react";

function Part() {
  return (
    <section className="overflow-hidden bg-[#48758E] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
      <img
        alt=""
        src="/Assets/Image/abeeg.png"
        className="hidden object-cover w-full h-56 sm:h-full lg:block md:block"
      />

      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        
        <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
          <p className="text-white md:mt-4 md:block">
            <h2 className="mb-6 text-4xl font-bold">
              Building Top Tech Talents for the World
            </h2>
            <ul className="pl-5 space-y-4 list-disc">
              <li>
                Robust content and Video, Self-paced + Live Classes, Assessments
                and projects
              </li>
              <li>
                Weekend classes, Intensive training, Focus on real business
                cases
              </li>
              <li>
                Work on multiple projects, Get real-time feedback, Real-time
                mentoring
              </li>
              <li>
                Learn to leverage LinkedIn, CV for tech industry, Access to job
                opportunities, Demo sessions on interviews
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Part;
