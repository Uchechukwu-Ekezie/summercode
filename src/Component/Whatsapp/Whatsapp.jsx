import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 flex gap-2 items-center">

      <a
        href="https://wa.me/message/QY3F7BI5YPQON1" // Replace with your WhatsApp number
        className="p-3 text-white transition duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600 px-3 flex gap-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
        <h1 >Click me to register</h1>
      </a>
    </div>
  );
};

export default WhatsAppIcon;
