import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const OnlineClassInfo = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-red-600">
        Please Read Before Filling the Form
      </h1>

      <h2 className="mb-4 text-xl font-semibold text-center">
        To join the online class you will need the following:
      </h2>
      <ul className="grid grid-cols-1 gap-4 p-0 mb-8 list-none sm:grid-cols-2">
        <li className="flex items-center">
          <span className="mr-2">✓</span> Laptop or desktop
        </li>
        <li className="flex items-center">
          <span className="mr-2">✓</span> Google Meet
        </li>
        <li className="flex items-center">
          <span className="mr-2">✓</span> Fast Internet Connection (4G
          recommended)
        </li>
        <li className="flex items-center">
          <span className="mr-2">✓</span> Distraction-free area for your kids
        </li>
      </ul>
      <p className="mb-6 font-medium text-center">
        Tuition is <span className="font-bold">₦50,000</span> for one child and
        if you have more than one, you enjoy sibling discount where each child
        pays <span className="font-bold">₦40,000</span>.
      </p>
      <h1 className="text-2xl font-extrabold text-center text-[#48758E] mb-3">
        Enroll Now Using Whatsapp
      </h1>
      <p className="mb-4 text-center">
        Please make payment to:
        <br />
        <span className="font-bold">
          Glitz Management Agency, 0265310354, Gt bank
        </span>
      </p>
      <p className="flex-col justify-center text-center ">
        and send evidence of payment to:
        <br />
        <p>
          <Link to="https://wa.me/message/QY3F7BI5YPQON1">
            <div className="flex items-center justify-center gap-3">
              <p> Whatsapp</p>
              <p>
                <FaWhatsapp className="text-2xl text-green-800" />
              </p>
            </div>
          </Link>
        </p>
      </p>
    </div>
  );
};

export default OnlineClassInfo;
