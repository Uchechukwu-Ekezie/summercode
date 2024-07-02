import React, { useState, useEffect } from "react";
import useRegistration from "../../Hooks/useRegistration";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [numChildren, setNumChildren] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [children, setChildren] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { enrollCourse } = useRegistration();

  const handleChildrenChange = (e) => {
    const count = Number(e.target.value);
    setNumChildren(count);
    setChildren(Array.from({ length: count }, () => ({ name: "", course: "" })));
  };

  useEffect(() => {
    let cost = 0;
    if (numChildren === 1) {
      cost = 50000;
    } else if (numChildren > 1) {
      cost = 40000 * numChildren;
    }
    setTotalCost(cost);
  }, [numChildren]);

  const handleChildChange = (index, field, value) => {
    const updatedChildren = [...children];
    updatedChildren[index][field] = value;
    setChildren(updatedChildren);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      parentsName: `${parentFirstName} ${parentLastName}`,
      parentsEmail: parentEmail,
      numberOfKids: numChildren,
      total: totalCost,
      children: children.map((child) => ({
        childsName: child.name,
        course: child.course,
      })),
    };
    console.log("Request Body:", requestBody);
    setFormSubmitted(true);
    enrollCourse(requestBody);
  };

  if (formSubmitted) {
    return (
      <div className="p-4">
        <h1 className="mb-8 text-2xl font-extrabold text-center text-[#48758E]">
          Thank you for enrolling!
        </h1>
        <p className="text-center">You have successfully submitted the form.</p>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="mb-8 mt-10 text-3xl font-extrabold text-center text-[#48758E]">
        Enroll Now Using Gmail
      </h1>
      <div className="max-w-lg mx-auto overflow-hidden transition-transform duration-500 ease-in-out transform bg-white rounded-lg shadow-md hover:-translate-y-2">
        <div className="px-8 py-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                Parent's First Name
              </label>
              <input
                className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="firstName"
                type="text"
                placeholder="Parent's First Name"
                value={parentFirstName}
                onChange={(e) => setParentFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Parent's Last Name
              </label>
              <input
                className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="lastName"
                type="text"
                placeholder="Parent's Last Name"
                value={parentLastName}
                onChange={(e) => setParentLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="children"
              >
                How many children are you enrolling?
              </label>
              <select
                className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                id="children"
                onChange={handleChildrenChange}
                required
              >
                <option value="">How many children are you enrolling?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {Array.from({ length: numChildren }, (_, index) => (
              <div key={index} className="p-4 mb-6 rounded-lg shadow-inner bg-gray-50">
                <div className="mb-4">
                  <label
                    htmlFor={`childFullName${index}`}
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Child {index + 1} Full Name
                  </label>
                  <input
                    type="text"
                    id={`childFullName${index}`}
                    name={`childFullName${index}`}
                    placeholder="Enter your child's full name"
                    className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                    value={children[index].name}
                    onChange={(e) =>
                      handleChildChange(index, "name", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor={`childCourse${index}`}
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Child {index + 1} Course
                  </label>
                  <select
                    id={`childCourse${index}`}
                    name={`childCourse${index}`}
                    className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                    value={children[index].course}
                    onChange={(e) =>
                      handleChildChange(index, "course", e.target.value)
                    }
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="webdev">
                      Web Development with HTML, CSS, and JavaScript
                    </option>
                    <option value="dataanalysis">Digital Media</option>
                    <option value="machinelearning">
                      AI & Machine Learning
                    </option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </div>
              </div>
            ))}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Parent's Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="totalCost"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Total Cost
              </label>
              <input
                type="text"
                id="totalCost"
                name="totalCost"
                value={`₦${totalCost}`}
                className="w-full px-4 py-3 leading-tight text-gray-700 transition-colors duration-300 ease-in-out border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
                readOnly
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block px-6 py-3 font-bold text-white bg-[#48758E] rounded-md hover:bg-[#3d5f72] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#48758E] focus:ring-opacity-50"
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
