import React, { useState, useEffect } from "react";
import useRegistration from "../../Hooks/useRegistration";

const RegistrationForm = () => {
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [numChildren, setNumChildren] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [children, setChildren] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {enrollCourse} = useRegistration()

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
    // Submit request body to the server here
  };

  if (formSubmitted) {
    return (
      <div className="p-4">
        <h1 className="mb-8 text-2xl font-extrabold text-center text-[#48758E]">
          Thank you for enrolling!
        </h1>
        <p className="text-center">You have successfully submitted the form.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="mb-8 text-2xl font-extrabold text-center text-[#48758E]">
        Enroll Now Using Gmail
      </h1>
      <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-6 py-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Parent's First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Parent's First Name"
                value={parentFirstName}
                onChange={(e) => setParentFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Parent's Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Parent's Last Name"
                value={parentLastName}
                onChange={(e) => setParentLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="children"
              >
                How many children are you enrolling?
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <div key={index}>
                <div className="mb-6">
                  <label
                    htmlFor={`childFullName${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Child {index + 1} Full Name
                  </label>
                  <input
                    type="text"
                    id={`childFullName${index}`}
                    name={`childFullName${index}`}
                    placeholder="Enter your child's full name"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    value={children[index].name}
                    onChange={(e) =>
                      handleChildChange(index, "name", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor={`childCourse${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Child {index + 1} Course
                  </label>
                  <select
                    id={`childCourse${index}`}
                    name={`childCourse${index}`}
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
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
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Parent's Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="totalCost"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Total Cost
              </label>
              <input
                type="text"
                id="totalCost"
                name="totalCost"
                value={`₦${totalCost}`}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                readOnly
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block px-6 py-3 font-bold text-white bg-[#48758E] rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
