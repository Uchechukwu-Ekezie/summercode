import React from "react";
import 'aos/dist/aos.css'

function DigitalMarket() {
    
  return (
    <div>
      <section  className="pt-32">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            <div className="lg:py-24" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Digital-Marketing Online Course, <br /> kickstart your kid career
                journey in TECH
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <div className="flex flex-row flex-col items-center sm:flex">
                <a
                  href="/enroll"
                  className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white transition bg-yellow-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Register Now
                </a>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 mt-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Contact Us
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarket;
