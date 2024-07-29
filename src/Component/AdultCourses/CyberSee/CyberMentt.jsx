import React from 'react'
import Ment from '../../Meant/Meant';

function CyberMentt() {
    const cyberCourse = {
        title: "Who is the course for?",
        description: "This course is designed for individuals who are interested in protecting systems, networks, and programs from digital attacks. It is suitable for beginners and intermediate learners who want to develop skills in cybersecurity practices and principles."
      };
    
      return (
        <div className="container px-4 mx-auto my-10">
          <Ment title={cyberCourse.title} description={cyberCourse.description} />
        </div>
      );
    }

export default CyberMentt