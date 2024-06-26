import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "red",borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "red",borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}


const Testimonials = ({ testimonials }) => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

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
           
          </div>
          <div className="relative h-full max-w-full lg:col-span-2 slider-container">
          <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-stretch "
                >
                  <blockquote className="flex flex-col justify-between w-full p-6 bg-white shadow-sm sm:p-8 lg:p-12">
                    <div>
                     
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-left text-rose-600 sm:text-3xl">
                          {testimonial.name}
                        </p>
                        <p className="mt-4 leading-relaxed text-justify text-gray-500">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Testimonials;
