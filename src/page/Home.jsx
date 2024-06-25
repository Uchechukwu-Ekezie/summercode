import React from 'react'
import Hero from '../Component/Hero/Hero'
import ParentTest from '../Component/Testimoial/ParentTest'
import Banner from '../Component/Banner/Banner'
import TechSkill from '../Component/Techskills/TechSkill'


function Home() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
        <Hero/>
        <Banner/>
        <TechSkill/>
        <ParentTest/>
    </div>
  )
}

export default Home