import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from './page/Home';
import Courses from './page/Courses';
import Webdev from './page/Webdev';
import Contact from './page/Contact';
import Registrationpage from './page/Registrationpage';
import Uiuxdev from './page/Uiuxdev';
import DigitalMarketdev from './page/DigitalMarketdev';
import Cybersec from './page/Cybersec';
import AiMachine from './page/AiMachine';
import ScrollToTop from './ScrollToTop';
import WhatsAppIcon from './Component/Whatsapp/Whatsapp';
import MainHome from './page/MainHome';
import AdultHome from './page/AdultPage/AdultHome';
import BackendDev from './page/AdultPage/BackendDev';
import CoursesAdult from './page/AdultPage/Courses';
import AdultCourseSelect from './page/AdultPage/AdultCourseSelect';
import Cybersecurity from './page/AdultPage/Cybersecurity';
import Softwaree from './page/AdultPage/Softwaree';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<MainHome />} />
            <Route path='/childrenhome' element={<Home />} />
            <Route path="/childrenhome/courses" element={<Courses />} />
            <Route path="/childrenhome/courses/webdesign" element={<Webdev />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/childrenhome/enroll" element={<Registrationpage/>}/>
            <Route path="/childrenhome/courses/ai_machine" element={<AiMachine/>} />
            <Route path="/childrenhome/courses/uiuxdesign" element={<Uiuxdev/>} />
            <Route path="/childrenhome/courses/digitalmarket" element={<DigitalMarketdev/>}/>
            <Route path="/childrenhome/courses/cyber-sec" element={<Cybersec/>}/>
            <Route path="/adulthome" element={<AdultHome/>}/>
            <Route path="/adulthome/coursess" element={<AdultCourseSelect/>}/>
            <Route path="/adulthome/coursess/backenddev" element={<BackendDev/>}/>
            <Route path="/adulthome/coursess/cybersecurity" element={<Cybersecurity/>}/>
            <Route path="/adulthome/coursess/softwareeng" element={<Softwaree/>}/>
          </Route>
        </Routes>
        <WhatsAppIcon/>
      </Router>
    </div>
  );
}

export default App;
