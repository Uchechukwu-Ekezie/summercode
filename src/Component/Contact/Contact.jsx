import React, { useState } from 'react';
import { FaFacebook, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/send', formData);
      alert(response.data);
    } catch (error) {
      alert('Failed to send message, please try again.');
    }
  };

  return (
    <section className="pt-24 text-white bg-white" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
      <div className="max-w-screen-xl px-4 mx-auto py-14 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-center text-black">Fill the form below to contact us!</h1>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-[#48758E] rounded-md lg:col-span-2 lg:py-12">
            <h1 className="mb-4 text-3xl font-extrabold">
              Let us know how we can help you!
            </h1>
            <p className="text-lg">
              Our fun and interactive bootcamp sparks creativity, teaches coding basics, and introduces the kids to cutting edge technology in a supportive environment!
            </p>
            <h2 className="mt-6 text-xl font-bold">Contact us today for any enquiries!</h2>
            <div className='flex items-center justify-center gap-5 mt-8'>
              <Link to='https://www.facebook.com/profile.php?id=61561607698897&mibextid=LQQJ4d'>
                <FaFacebook className='text-2xl'/>
              </Link>
              <Link to='https://wa.me/message/QY3F7BI5YPQON1'>
                <FaWhatsapp className='text-2xl'/>
              </Link>
              <Link to='https://x.com/glitz_tutors?s=11'>
                <FaTwitter className='text-2xl'/>
              </Link>
              <Link to='tel:+2347063284878'>
                <FaPhoneAlt className='text-2xl'/>
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full p-3 text-sm placeholder-yellow-500 bg-gray-700 border border-yellow-500 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full p-3 text-sm placeholder-yellow-500 bg-gray-700 border border-yellow-600 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 text-sm placeholder-yellow-600 bg-gray-700 border border-yellow-600 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block w-full px-5 py-3 font-medium text-white transition duration-300 bg-yellow-600 rounded-lg hover:bg-yellow-700 sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
