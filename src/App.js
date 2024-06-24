import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from './page/Home';
import Courses from './page/Courses';
import Webdev from './page/Webdev';
import Contact from './page/Contact';
import Registrationpage from './page/Registrationpage';
import Backdev from './page/Backdev';
import Uiuxdev from './page/Uiuxdev';
import DigitalMarketdev from './page/DigitalMarketdev';
import Cybersec from './page/Cybersec';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/webdesign" element={<Webdev />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Registrationpage/>}/>
            <Route path="/courses/backdesign" element={<Backdev/>} />
            <Route path="/courses/uiuxdesign" element={<Uiuxdev/>} />
            <Route path="/courses/digital-design" element={< DigitalMarketdev/>} />
            <Route path="/courses/cyber-sec" element={<Cybersec/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
