import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactUsIn from '../../Hooks/useContact';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { contactUs } = contactUsIn();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    if (e.target.id === 'email') {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    contactUs(formData);
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="p-4">
        <h1 className="mb-8 text-2xl font-extrabold text-center text-[#48758E]">
          Thank you for contacting us!
        </h1>
        <p className="text-center">Your message has been successfully sent.</p>
        <ToastContainer />
      </div>
    );
  }

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
              Our fun and interactive online summer training sparks creativity, teaches coding basics, and introduces the kids to cutting edge technology in a supportive environment!
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
              <Link to='tel:+2349036614542'>
                <FaPhoneAlt className='text-2xl'/>
              </Link>
              <Link to='https://www.instagram.com/glitz_tutors?igsh=aHR4cHRtbTNtNWk5&utm_source=qr' target="_blank" >
                <FaInstagram className='text-2xl'/>
              </Link>
            </div>
          </div>
          <div className="p-8 bg-[#48758E]  rounded-lg shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full p-3 text-sm placeholder-white bg-gray-700 border border-white rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full p-3 text-sm placeholder-white bg-gray-700 border border-white rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && <p className="text-sm text-red-500">{emailError}</p>}
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full p-3 text-sm placeholder-white bg-gray-700 border border-white rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 text-sm placeholder-white bg-gray-700 border border-white rounded-lg"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block w-full px-5 py-3 font-medium text-[#48758E] transition duration-300 bg-white rounded-lg hover:bg-yellow-700 sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Contacts;
