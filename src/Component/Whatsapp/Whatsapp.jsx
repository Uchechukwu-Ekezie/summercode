import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <div className="fixed flex items-center bottom-4 right-4">
      <a
        href="https://wa.me/message/QY3F7BI5YPQON1" // Replace with your WhatsApp number
        className="flex items-center gap-2 p-3 text-white transition duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="text-lg font-medium">Click me to register</span>
      </a>
    </div>
  );
};

export default WhatsAppIcon;
