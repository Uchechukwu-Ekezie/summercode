import React from 'react'
import Hero from '../Component/Hero/Hero'
import ParentTest from '../Component/Testimoial/ParentTest'
import Banner from '../Component/Banner/Banner'
import TechSkill from '../Component/Techskills/TechSkill'

import CourseChoose from '../Component/Chooseus/CourseChoose'


function Home() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
        <Hero/>
        <Banner/>
        <TechSkill/>
        <ParentTest/>

        <CourseChoose/>
    </div>
  )
}

export default Home