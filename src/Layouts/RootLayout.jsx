import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Component/Navbar/Navbar';
import CourseNavbar from '../Component/Navbar/CourseNavbar';
// import Footer from '../Components/Footer';
// import CountDown from '../Components/CountDown';

function RootLayout() {
  const location = useLocation();

  // Determine if the current path is a course path
  const isCoursePage = location.pathname.startsWith('/courses');

  return (
    <>
      <div>
        {/* <CountDown/> */}
        {isCoursePage ? <CourseNavbar /> : <Navigation />}
        <main className="min-h-80">
          <Outlet />
        </main>
        <footer className="h-16 text-white bg-slate-700">
          {/* <Footer/> */}
        </footer>
      </div>
    </>
  );
}

export default RootLayout;
