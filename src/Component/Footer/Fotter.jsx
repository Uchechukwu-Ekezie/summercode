import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaHome, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';

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
              <span className='text-xl text-white lg:text-xl'>No 8 Alexander crescent <br /> Aminu Kanu wuse 2</span>
              </div>
              <div className='font-medium text-white'>
              <Link to='tel:+2349036614542'>
                <div className='flex items-center gap-3 mt-3 mb-3'>
                  <p  className='p-1 border-2 border-white rounded-md'><FaPhoneAlt className='text-xl'/></p>
                  <p>+2349036614542</p>
                </div>
              </Link>
              <Link to='tel:+2349161684111'>
                <div className='flex items-center gap-3 mb-3'>
                  <p  className='p-1 border-2 border-white rounded-md'><FaPhoneAlt className='text-xl'/></p>
                  <p>+2349161684111</p>
                </div>
              </Link>
              <Link to='tel:+2347059723519'>
                <div className='flex items-center gap-3 mb-3'>
                  <p  className='p-1 border-2 border-white rounded-md'><FaPhoneAlt className='text-xl '/></p>
                  <p className='text-balance'>+2347059723519</p>
                </div>
              </Link>
              </div>
              
            </p>

            <ul className="mt-8 space-y-1 text-sm text-white">
              <li>Classes Schedule</li>
              <li>Monday to Friday: 11am - 1pm</li>
        
            </ul>
            <p className='mt-8 mb-4 text-xl font-semibold text-white'>Follow Us</p>
            <div className='flex items-center gap-5 text-white '>
              <Link to='https://www.facebook.com/profile.php?id=61561607698897&mibextid=LQQJ4d' className='p-2 border-2 border-white rounded-md'>
                <FaFacebook className='text-xl'/>
              </Link>
              <Link to='https://wa.me/message/QY3F7BI5YPQON1' target="_blank" className='p-2 border-2 border-white rounded-md'>
                <FaWhatsapp className='text-xl'/>
              </Link> 
              <Link to='https://x.com/glitz_tutors?s=11'  className='p-2 border-2 border-white rounded-md'>
                <FaTwitter className='text-xl'/>
              </Link>
              <Link to='https://www.instagram.com/glitz_tutors?igsh=aHR4cHRtbTNtNWk5&utm_source=qr' target="_blank" className='p-2 border-2 border-white rounded-md'>
                <FaInstagram className='text-xl'/>
              </Link>
            </div>
      
          </div>

          {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            </div> */}

            <div>
              <p className="font-medium text-white">Courses</p>
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
    
    </footer>
  );
};

export default Footer;
