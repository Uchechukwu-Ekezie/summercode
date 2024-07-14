import React from 'react'
import { Link } from 'react-router-dom';

function Prices() {
  return (
    <div className="max-w-3xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div
          className="p-6 border shadow-sm rounded-2xl sm:order-last sm:px-8 lg:p-12"
        >
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Kids Courses
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₦50,000 </strong>

              <span className="text-sm font-medium text-gray-700">/PER KIDS</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Artificial Intelligence & Machine Learning</span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Web Development </span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Cyber Security</span>
            </li>

            <li className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Digital Media </span>
            </li>
          </ul>

          <Link
            to='/childrenhome/courses'
            className="block px-12 py-3 mt-8 text-sm font-medium text-center text-white bg-[#48758E] border border-indigo-600 rounded-full hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get Started
          </Link>
        </div>

        <div className="p-6 border border-gray-200 shadow-sm rounded-2xl sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
            Adults Courses
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₦50,000 </strong>

              <span className="text-sm font-medium text-gray-700">/PER PERSON</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Backend Development </span>
            </li>

            <li className="flex items-center gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Cyber Security </span>
            </li>

            <li className="flex items-center gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700"> Software Engineering </span>
            </li>

            <li className="flex items-center gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700">Data Science </span>
            </li>
            
            <li className="flex items-center gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-[#48758E] size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <span className="text-gray-700">Product Manager </span>
            </li>
          </ul>

          <Link
            to='/adulthome/courses'
            className="block px-12 py-3 mt-8 text-sm font-medium text-center text-white bg-[#48758E] border border-indigo-600 rounded-full hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Prices;
