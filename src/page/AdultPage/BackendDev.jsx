import React from "react";
import Backend from "../../Component/AdultCourses/Backen/Backend";
import BackMent from "../../Component/AdultCourses/Backen/BackMent";
import BackHero from "../../Component/AdultCourses/Backen/BackHero";

function BackendDev() {
  return (
    <div className="pt-24">
      <BackHero/>
      <BackMent />
      <Backend />
    </div>
  );
}

export default BackendDev;
