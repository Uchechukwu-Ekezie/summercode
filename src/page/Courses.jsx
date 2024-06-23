import React from 'react'
import CourseNavbar from '../Component/Navbar/CourseNavbar'
import CourseHero from '../Component/Hero/CourseHero'
import GeneralCourse from '../Component/CourseSelect/GeneralCourse'
import Whychooseus from '../Component/CourseSelect/Webdesign/Whychooseus'

function Courses() {
  return (
    <div>
        <CourseNavbar/>
        <CourseHero/>
        <GeneralCourse/>
        <Whychooseus/>
    </div>
  )
}

export default Courses