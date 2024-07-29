import React from 'react'
import Ment from '../../Meant/Meant';

function BackMent() {
    const backendCourse = {
        title: "Who is the course for?",
        description: "This course is designed for individuals who are interested in learning how to build and maintain the server-side of web applications. It is suitable for beginners and intermediate learners who want to develop skills in backend development practices and principles, including server-side programming, databases, and APIs."
      };
    
      return (
        <div className="container px-4 mx-auto my-10">
          <Ment title={backendCourse.title} description={backendCourse.description} />
        </div>
      );
    }
export default BackMent;
