import React from 'react'
import CourseNavbar from '../Component/Navbar/CourseNavbar'
import CourseHero from '../Component/Hero/CourseHero'
import GeneralCourse from '../Component/CourseSelect/GeneralCourse'

import 'aos/dist/aos.css'

function Courses() {
  return (
    <div >
        <CourseNavbar/>
        <div >
        <CourseHero/>
        <GeneralCourse/>
        </div>
    </div>
  )
}

export default Courses