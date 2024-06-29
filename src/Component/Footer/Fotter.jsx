import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaHome, FaInstagram, FaPhone, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#48758E] lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="/Assets/Image/footerimg.jpg"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-2xl font-medium tracking-wide text-white uppercase">Contact Us</span>
              <div className='flex items-center gap-4 mt-4 font-normal hover:opacity-75' >
              <p className='text-xl text-white lg:text-lg'><FaHome/></p>
              <span className='text-lg text-white lg:text-xl'>No 8 Alexander crescent <br /> Aminu Kanu wuse 2</span>
              </div>
              
            </p>

            <ul className="mt-8 space-y-1 text-sm text-white">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <div className='flex items-center gap-5 mt-8 text-white'>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-white">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="#" className="text-white transition hover:opacity-75">
                    1on1 Coaching
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white transition hover:opacity-75">
                    Company Review
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white transition hover:opacity-75">
                    Accounts Review
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white transition hover:opacity-75">
                    HR Consulting
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white transition hover:opacity-75">
                    SEO Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Courses</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="/courses/ai_machine" className="text-white transition hover:opacity-75">
                    AI / Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/courses/webdesign" className="text-white transition hover:opacity-75">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/courses/cyber-sec" className="text-white transition hover:opacity-75">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link to="/courses/uiuxdesign" className="text-white transition hover:opacity-75">
                    Digital media
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-100">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
