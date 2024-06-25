import React from 'react';

const UserProfileCard = ({ name, role, desc, image, stats }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl px-4 py-4 mx-auto my-10 text-center border rounded-xl md:max-w-3xl md:flex-row md:items-start md:text-left" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in">
      <div className="mb-4 md:mr-6 md:mb-0">
      <img 
        className="max-w-full h-auto object-cover md:h-xl lg:h-xl" 
        src={image} 
        alt={name} 
      />      </div>
      <div className='mt-7'>
        <p className="text-xl font-medium text-gray-700">{name}</p>
        <p className="mb-4 text-sm font-medium text-gray-500">{role}</p>
        <p className="mb-4 text-sm font-medium text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
