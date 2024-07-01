import React from 'react'
import OnlineClassInfo from '../Component/OnlineClassInfo/OnlineClassInfo';
import RegistrationForm from '../Component/RegistrationForm/RegistrationForm';

function Registrationpage() {
    return (
        <div className="container p-6 mx-auto pt-28">
            <OnlineClassInfo/>
            <RegistrationForm/>
            {/* <h1 className="mb-8 text-3xl font-extrabold text-center text-yellow-600">Enroll Now</h1>
            <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                <div className="px-6 py-8">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email address" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course</label>
                            <select id="course" name="course" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                                <option value="">Select a course</option>
                                <option value="python">Introduction to Python</option>
                                <option value="webdev">Web Development with HTML, CSS, and JavaScript</option>
                                <option value="dataanalysis">Data Analysis with Python</option>
                                <option value="machinelearning">Machine Learning Basics</option>
                                <option value="cybersecurity">Cybersecurity Fundamentals</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                            <textarea id="message" name="message" rows="4" placeholder="Enter any additional information" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="inline-block px-6 py-3 font-bold text-white bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Enroll Now</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default Registrationpage