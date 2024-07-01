import React from 'react';

const SummerCamp = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row items-center bg-white">
      <div className="w-full lg:w-1/2 p-4">
        <img
          src="/Assets/Image/summercamp.png" // Replace with the actual path to the image
          alt="Kids in summer camp"
          className="w-full h-auto rounded"
        />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">How Our Summer Online Classes Work</h2>
        <p className="mb-4">
        Exciting news for parents! Our engaging SUMMER TRAINING PROGRAM spans 5 weeks, starting on July 29 and concluding on August 30, 2024.
        </p>
        <p className="mb-4">
        This Program is tailored to provide impactful learning experiences throughout the summer, your kids can look forward to attending our classes every weekday (Mondays to Fridays) from 11am to 1pm. 
        </p>
       
      </div>
    </div>
  );
};

export default SummerCamp;

