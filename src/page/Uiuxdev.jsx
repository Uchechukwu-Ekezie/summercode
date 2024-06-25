import React from 'react'
// import Meant from '../Component/CourseSelect/Webdesign/Meant'
import Uiuxdesign from '../Component/CourseSelect/Uiuxdesign/Uiuxdesign'
import UserProfileCard from '../Component/Card/Profilecard'
import UiCurriculum from '../Component/CourseSelect/Uiuxdesign/UiCurriculum';
import UiMeant from '../Component/CourseSelect/Uiuxdesign/UiMeant';
function Uiuxdev() {
  return (
    <div>
        <Uiuxdesign/>
        <UiMeant/>
        <UiCurriculum/>
        <div className="App">
        <UserProfileCard
          name="Kornebari Raphael Kpai"
          desc="Hi, I'm Kornebari Raphael Kpai, a Computer Science teacher with a passion for graphic design. I hold a degree in Molecular Biology and Genetics from Eastern Mediterranean University Cyprus (TRNC). I'm excited to share my design skills with you in a way that's easy to understand and fun. Let's learn and create together!"
          role="Graphic Designer"
          image="/Assets/Image/Kornebari.jpg"
        />
      </div>
    </div>
  )
}

export default Uiuxdev