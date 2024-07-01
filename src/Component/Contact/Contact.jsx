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
        <h1 className="mb-6 text-2xl flex items-center justify-center font-bold text-center text-black">Fill the form below to contact us!</h1>
        <div className="flex items-center justify-center gap-x-16 gap-y-8  text-center">
          <div className=" p-8 bg-[#48758E] w-[50%] items-center rounded-md  lg:py-12  ">
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
        </div>
      </div>
    </section>
  );
}

export default Contacts;
