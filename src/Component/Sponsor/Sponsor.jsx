import React from 'react';

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://via.placeholder.com/150', link: '#' },
  // Add more sponsors as needed
];

const Sponsor = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Our Sponsors
        </h2>
        <div className="mt-10  gap-8 md:grid-cols-3 olg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <a key={sponsor.name} href={sponsor.link} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-20"/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
