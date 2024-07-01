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
          Our summer camp runs in two-week batches with a total of 2 batches. You can enroll your kids for one, or two batches to engage them throughout the summer season.
        </p>
        <p className="mb-4">
          Our courses are progressive so your kids who attend both batches will move to more advanced concepts.
        </p>
        <p className="mb-4">
          Classes run for 2 hours daily, Monday to Friday. You can also choose between morning and afternoon slots. See the available dates below:
        </p>
        <ul className="list-disc ml-6">
          <li>July 22nd – Aug 2nd, 2024</li>
          <li>Aug 5th – Aug 16th, 2024</li>
          <li>Aug 19th – Aug 30th, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default SummerCamp;

