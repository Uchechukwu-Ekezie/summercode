import React from 'react'
import Ment from '../../Meant/Meant'

function UiMeant() {
    const uiUxDesignCourse = {
        title: "Who is the course for?",
        description: "This course is for anyone who wants to learn how to design intuitive and engaging user interfaces and user experiences. It is suitable for beginners and intermediate learners. No prior knowledge of design or user experience principles is required. You'll gain hands-on experience with design tools and methodologies to create compelling digital experiences."
      };
  return (
    <div className="container px-4 mx-auto my-10">
        <Ment  title={uiUxDesignCourse.title} description={uiUxDesignCourse.description}/>
    </div>
  )
}

export default UiMeant