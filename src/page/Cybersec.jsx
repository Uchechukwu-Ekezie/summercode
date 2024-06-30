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

  const feww = [
   "Agba Paschal Eifowe is a dynamic and driven computer science graduate from Edo University Uziarhe, specializing in cybersecurity and education. With a keen eye for detail and a passion for technology, Agba excels in Python, Java, Network Security, Ethical Hacking, and Web Development. His teaching prowess is highlighted by his innovative lesson planning and curriculum development, making complex concepts accessible and engaging.", <br/>,
"During his tenure as a Cybersecurity Intern at Krusty Lab, Abuja, Agba showcased his expertise by conducting thorough security assessments, developing robust security protocols, and crafting impactful cybersecurity awareness materials. He spearheaded a Cybersecurity Awareness Campaign, significantly enhancing online safety awareness among his peers. Additionally, he developed a secure web application, demonstrating his proficiency in encryption, user authentication, and secure coding practices. Agba's commitment to cybersecurity and education makes him a valuable asset in today's digital landscape."
  ]
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
      <UserProfileCard
        name="Agba Paschal Eifowe"
        desc={feww}
        role="Cyber Security Analyst"
        image="/Assets/Image/agba.png"
      />
      <CyberCurriculum />
      <Cyberend />
    </div>
  );
}

export default Cybersec;
