import React from 'react'
import AdultHero from '../../Component/Hero/AdultHero'
import AboutCard from '../../Component/Adult/about/AboutCard'
import AdultTechSkill from '../../Component/Techskills/AdultTechSkill'

function AdultHome() {
  return (
    <div className='pt-20'>
      <AdultHero/>
      <AboutCard/>
      <AdultTechSkill/>
    </div>
  )
}

export default AdultHome