import React from "react";
import OnlineClassInfo from "../Component/OnlineClassInfo/OnlineClassInfo";
import RegistrationForm from "../Component/RegistrationForm/RegistrationForm";

function Registrationpage() {
  return (
    <div className="container p-6 mx-auto pt-28">
      <h1 className="text-2xl font-extrabold text-center text-[#48758E]">
        Enroll Now Using Whatsapp 
      </h1>
      <OnlineClassInfo />
      <RegistrationForm />
    </div>
  );
}

export default Registrationpage;
