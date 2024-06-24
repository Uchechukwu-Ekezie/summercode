import React from 'react'
import CourseNavbar from '../Component/Navbar/CourseNavbar'
import CourseHero from '../Component/Hero/CourseHero'
import GeneralCourse from '../Component/CourseSelect/GeneralCourse'
import Whychooseus from '../Component/CourseSelect/Webdesign/Whychooseus'
import 'aos/dist/aos.css'

function Courses() {
  return (
    <div >
        <CourseNavbar/>
        <div >
        <CourseHero/>
        <GeneralCourse/>
        <Whychooseus/>
        </div>
    </div>
  )
}

export default Courses