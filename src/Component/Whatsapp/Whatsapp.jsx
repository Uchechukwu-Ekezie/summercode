import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/message/QY3F7BI5YPQON1" // Replace with your WhatsApp number
      className="fixed p-3 text-white transition duration-300 bg-green-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className='text-3xl'/>
    </a>
  );
};

export default WhatsAppIcon;
