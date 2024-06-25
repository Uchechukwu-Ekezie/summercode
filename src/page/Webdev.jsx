import React from "react";
import Webdesign from "../Component/CourseSelect/Webdesign/Webdesign";
import UserProfileCard from "../Component/Card/Profilecard";
import Webcurriculum from "../Component/CourseSelect/Webdesign/Webcurriculum";
import Webment from "../Component/CourseSelect/Webdesign/Webmeant";

function Webdev() {
  return (
    <div>
      <Webdesign />
      <Webment/>
      <Webcurriculum/>
      <div className="App">
        <UserProfileCard
          name="Okikijesu Paul Oladimeji"
          desc="Okikijesu Paul Oladimeji is a dedicated and passionate product designer and web developer with a strong academic foundation and a deep interest in the ever-evolving field of technology. He holds a Diploma in Software Engineering from the prestigious Lincoln University Malaysia and is currently pursuing a second degree in Cybersecurity. With over four years of experience in the tech industry, Paul has successfully worked on numerous projects, demonstrating his quality hands-on experience.
          Paul is the CEO of Aided Technologies, a startup committed to empowering individuals to become better versions of themselves through the use of technology. His leadership at Aided Technologies reflects his commitment to innovation and excellence in the tech space."
          role="Web Developer"
          image="/Assets/Image/Okikijesu Paul Oladimeji.jpg"
        />
      </div>
    </div>
  );
}

export default Webdev;
