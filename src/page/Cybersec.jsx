import React from "react";
import UserProfileCard from "../Component/Card/Profilecard";
import CyberCurriculum from "../Component/CourseSelect/CyberSec/CyberCurric";
import Cyberend from "../Component/CourseSelect/CyberSec/Cyberend";
import CyberHero from "../Component/CourseSelect/CyberSec/CyberHero";
import CyberMent from "../Component/CourseSelect/CyberSec/CyberMent";

function Cybersec() {
  const desc = [
    "Saint Moses Agbukor is a distinguished software engineer and cybersecurity expert located in Abuja, Nigeria. With a strong foundation in backend systems, he excels at designing secure RESTful APIs and deploying applications on cloud platforms like AWS using Docker. Saint combines technical proficiency with a commitment to excellence, consistently delivering high-quality solutions", <br />,
    " In the realm of cybersecurity, he possesses hands-on experience in ethical hacking, digital forensics, and securing applications against various threats. He is skilled in identifying vulnerabilities, performing penetration testing, and implementing comprehensive security measures. His extensive expertise in digital forensics enables him to effectively investigate and respond to security incidents, ensuring the protection of sensitive data and the integrity of systems."
  ];

  return (
    <div className="">
      <CyberHero />
      <CyberMent />
      <UserProfileCard
        name="Saint Moses Agbukor"
        desc={desc}
        role="Cyber Security Analyst"
        image="/Assets/Image/saintnew.png"
      />
      <CyberCurriculum />
      <Cyberend />
    </div>
  );
}

export default Cybersec;
