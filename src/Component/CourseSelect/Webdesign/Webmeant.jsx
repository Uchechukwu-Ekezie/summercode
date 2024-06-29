import React from 'react';
import Ment from '../../Meant/Meant';

function Webment() {
  const frontendCourse = {
    title: "Who is the course for?",
    description: "This course is for anyone who wants to learn how to build a website from scratch. It is suitable for beginners and intermediate learners. No prior knowledge of web design or development is required."
  };

  return (
    <div className="container px-4 mx-auto my-10">
      <Ment title={frontendCourse.title} description={frontendCourse.description} />
    </div>
  );
}

export default Webment;
