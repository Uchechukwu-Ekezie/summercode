import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS

function Ment({ title, description }) {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="max-w-5xl p-5 mx-auto my-5 bg-yellow-500 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <h1 className="w-4/5 p-2 mx-auto mb-4 text-2xl font-bold text-center bg-white rounded-md">
        {title}
      </h1>
      <p className="mx-5 text-base leading-relaxed text-gray-800">
        {description}
      </p>
    </div>
  );
}

export default Ment;
