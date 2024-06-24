import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Component/Navbar/Navbar';
import CourseNavbar from '../Component/Navbar/CourseNavbar';
import Footer from '../Component/Footer/Fotter';

function RootLayout() {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith('/courses');

  return (
    <>
      <div>
        {isCoursePage ? <CourseNavbar /> : <Navigation />}
        <main className="min-h-80">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default RootLayout;
