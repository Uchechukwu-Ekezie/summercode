import React from 'react'
import Meant from '../Component/CourseSelect/Webdesign/Meant'
import Uiuxdesign from '../Component/CourseSelect/Uiuxdesign/Uiuxdesign'
import UserProfileCard from '../Component/Card/Profilecard'
function Uiuxdev() {
  const userStats = [
    { label: "Articles", value: 13 },
    { label: "Papers", value: 7 },
    { label: "Followers", value: "2.5k" },
  ];
  return (
    <div>
        <Uiuxdesign/>
        <Meant/>
        <div className="App">
        <UserProfileCard
          name="Kornebari Raphael Kpai"
          desc="Hi, I'm Kornebari Raphael Kpai, a Computer Science teacher with a passion for graphic design. I hold a degree in Molecular Biology and Genetics from Eastern Mediterranean University Cyprus (TRNC). I'm excited to share my design skills with you in a way that's easy to understand and fun. Let's learn and create together!"
          role="Graphic Designer"
          image="/Assets/Image/Kornebari.jpg"
          stats={userStats}
        />
      </div>
    </div>
  )
}

export default Uiuxdev