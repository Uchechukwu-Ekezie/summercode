import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonials = ({ testimonials }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 16,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        spacing: 16,
      },
      "(min-width: 1024px)": {
        slidesPerView: 3,
        spacing: 32,
      },
    },
  });

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:px-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Parents Love Our Program!
            </h2>
            <p className="mt-4 text-gray-700">
            “This compilation features a carefully curated list of the top 10 parent reviews, providing valuable insights and perspectives on various topics.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative lg:col-span-2 max-w-2xl">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex items-stretch "
                >
                  <blockquote className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12 w-full">
                    <div>
                     
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl text-left">
                          {testimonial.name}
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-500 text-justify">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
