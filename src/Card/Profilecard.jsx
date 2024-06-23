import React from 'react';

const UserProfileCard = ({ name, role, desc, image, stats }) => {
  return (
    <div className="flex flex-col items-center max-w-xl px-4 py-4 mx-auto my-10 text-center border rounded-xl md:max-w-3xl md:flex-row md:items-start md:text-left" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in">
      <div className="mb-4 md:mr-6 md:mb-0">
        <img className="object-cover rounded-lg h-xl md:w-full" src={image} alt={name} />
      </div>
      <div>
        <p className="text-xl font-medium text-gray-700">{name}</p>
        <p className="mb-4 text-sm font-medium text-gray-500">{role}</p>
        <p className="mb-4 text-sm font-medium text-gray-500">{desc}</p>
        <div className="flex space-x-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-xl">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-3xl font-medium text-gray-600">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mb-3"></div>
        <div className="flex space-x-2">
          <button className="w-full px-4 py-2 font-medium text-gray-500 bg-white border-2 rounded-lg">Message</button>
          <button className="w-full px-4 py-2 font-medium text-white bg-blue-600 border-2 border-transparent rounded-lg">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
