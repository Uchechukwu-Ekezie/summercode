import React from 'react'
import UserProfileCard from '../Component/Card/Profilecard'
import CyberCurriculum from '../Component/CourseSelect/CyberSec/CyberCurric'
import Cyberend from '../Component/CourseSelect/CyberSec/Cyberend'
import CyberHero from '../Component/CourseSelect/CyberSec/CyberHero'

function Cybersec() {
  return (
    <div className='pt-32'>
      <CyberHero/>
      <CyberCurriculum/>
      <UserProfileCard
        name="Agba Paschal Eifowe"
        desc="Hi, I'm Agba Paschal Eifowe a recent computer science graduate with a passion for cybersecurity and education. With a solid foundation in computer science principles and hands-on experience in cybersecurity, Jane is dedicated to inspiring and educating young minds about the importance of cybersecurity in today's digital age.
        "
        role="Cyber Security Analyst"
        image="/Assets/Image/agbapaschal.png"
      />
      <Cyberend/>
    </div>

  )
}

export default Cybersec