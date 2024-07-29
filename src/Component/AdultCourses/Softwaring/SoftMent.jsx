import React from 'react'
import Ment from '../../Meant/Meant';

function SoftMent() {
    const softwareEngineeringCourse = {
        title: "Who is the course for?",
        description: "This course is designed for individuals who are interested in developing high-quality software applications. It is suitable for beginners and intermediate learners who want to develop skills in software engineering practices and principles."
      };
    
      return (
        <div className="container px-4 mx-auto my-10">
          <Ment title={softwareEngineeringCourse.title} description={softwareEngineeringCourse.description} />
        </div>
      );
    }

export default SoftMent