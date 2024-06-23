import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Component/Navbar/Navbar';
import CourseNavbar from '../Component/Navbar/CourseNavbar';

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
        <footer className="h-16 text-white bg-slate-700">
          {/* Footer content */}
        </footer>
      </div>
    </>
  );
}

export default RootLayout;
