import React from "react";
import UserProfileCard from "../Component/Card/Profilecard";
import AiMeant from "../Component/CourseSelect/AIMACHINE/AiMeant";

function AiMachine() {
  return (
    <div className="pt-36">
      <AiMeant/>
      <UserProfileCard
        name="Mbowhen Priscilla James"
        desc="Mbowhen Priscilla James is a dedicated and passionate software engineer and AI specialist with a solid academic foundation and a keen interest in the ever-evolving field of technology. Holding a Bachelor's degree in Computer Science with a specialization in Artificial Intelligence (AI) from Lincoln University Malaysia and an advanced diploma in Software Engineering from Aptech Computer Education, Mbowhen combines rigorous formal education with practical expertise."
        role="AI specialist"
        image="/Assets/Image/Mbowhen Priscilla Jame .JPEG.png"
      />
    </div>
  );
}

export default AiMachine;
