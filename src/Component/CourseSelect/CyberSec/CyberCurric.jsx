import React from 'react';
import Curriculum from "../../Curriculum/Curriculum";


function CyberCurriculum() {
  const faqData = [
    {
      question: "Week 1: Introduction to Cybersecurity",
      answer: [
        "Introduction to Cybersecurity: ",<br />,
        "Internet Basics: How the internet works and basic safety rules.",<br />,
        "Online Identity and Privacy: Protecting personal information online.",<br />,
        "Common Online Threats: Recognizing and avoiding threats like malware and phishing.",<br />,
        "Basic Cyber Hygiene: Importance of strong passwords and how to create them.",
      ],
    },
    {
      question: "Week 2: Safe Online Behavior",
      answer: [
        "Social Media Safety: Safe practices on social media and dealing with cyberbullying.",<br />,
        "Safe Online Gaming: Risks and safety measures for online gaming.",<br />,
        "Secure Communication: Safe ways to communicate online and recognizing secure websites.",<br />,
        "Digital Footprint: Understanding and managing one's digital footprint.",<br />,
        "Review and Quiz: Review of the week’s topics with interactive quizzes and games.",
      ],
    },
    {
      question: "Week 3: Hands-On Cybersecurity Skills",
      answer: [
        "Basic Coding and Scripting: Introduction to coding (Scratch for younger kids, Python for older kids).",<br />,
        "Network Security Basics: Understanding networks, firewalls, and setting up a secure home network.",<br />,
        "Ethical Hacking and Pen Testing: Basics of ethical hacking and penetration testing.",<br />,
        "Protecting Devices: Securing computers, tablets, and smartphones with antivirus tools.",<br />,
        "Mid-Camp Project: Start working on a cybersecurity project, such as designing a secure online platform.",
      ],
    },
    {
      question: "Week 4: Advanced Topics and Project Work",
      answer: [
        "Advanced Coding and Scripting: Advanced coding concepts and creating complex cybersecurity scripts.",<br />,
        "Cryptography Basics: Understanding encryption and decryption with hands-on activities.",<br />,
        "Cybersecurity in the Real World: Real-world applications and careers in cybersecurity.",<br />,
        "Cyber Laws and Ethics: Understanding cyber laws, regulations, and ethical considerations.",<br />,
        "Project Work and Guidance: Continued project work with individual and group mentoring.",
      ],
    },
    {
      question: "Week 5: Project Completion and Presentation",
      answer: [
        "Final Project Development: Finalizing projects and group feedback sessions.",<br />,
        "Project Presentations: Presentations by younger kids (7-10 years) and older kids (11-15 years) with feedback and prizes.",<br />,
        "Cybersecurity Challenges: Fun cybersecurity challenges and Capture the Flag (CTF) activity.",<br />,
        "Camp Wrap-Up and Farewell: Review of key learnings, certificates, awards ceremony, and farewell party.",
      ],
    },
  ];

  return (
    <div>
      <Curriculum faqs={faqData} />
    </div>
  );
}

export default CyberCurriculum;