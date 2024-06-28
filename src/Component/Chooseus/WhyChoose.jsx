import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faShieldAlt, faTag, faUserShield, faClock, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
 // Make sure to update the path to the image

function WhyChooseUs() {
  const features = [
    { icon: faMedal, title: 'Certified Instructors' },
    { icon: faShieldAlt, title: 'Child Safety' },
    { icon: faTag, title: 'Best Price Offer' },
    { icon: faUserShield, title: 'Expert Mentors' },
    { icon: faClock, title: 'Flexible Schedules' },
    { icon: faFolderOpen, title: 'Comprehensive Curriculum' },
  ];

  return (
    <section className="overflow-hidden bg-white">
      <div className="container grid items-center grid-cols-1 gap-8 px-4 py-12 mx-auto sm:grid-cols-2">
        <div className="relative">
          <img src={Image} alt="Coding class" className="object-cover w-full h-full rounded-lg" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-bold text-red-600">Why Choose Us</h2>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Discover the Best Online Coding Bootcamp for Kids
          </h2>
          <p className="mt-4 text-gray-600">
            At our online coding bootcamp, we strive to provide the best learning experience for children. Our courses are designed to be engaging, educational, and fun, ensuring that your child gains valuable skills in a supportive environment.
          </p>
          <div className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 sm:justify-start">
                <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-red-600" />
                <span className="font-semibold text-gray-800">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
