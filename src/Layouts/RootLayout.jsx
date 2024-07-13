import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CourseNavbar from "../Component/Navbar/CourseNavbar";
import MainNavbar from "../Component/Navbar/MainNavbar";
import Footer from "../Component/Footer/Fotter";
import CourseNavbarAdult from "../Component/Navbar/CourseNavbarAdult";
import NavigationAdult from "../Component/Navbar/NavbarAdult";
import Navigati from "../Component/Navbar/Navbar";


function RootLayout() {
  const location = useLocation();
  const isChildrenCoursePage = location.pathname.startsWith("/childrenhome/courses");
  const isAdultCoursePage = location.pathname.startsWith("/adulthome/courses");
  const isMainHomePage = location.pathname === "/";
  const isAdultHomePage = location.pathname === "/adulthome";
  const isChildrenHomePage = location.pathname === "/childrenhome";

  return (
    <>
      <div>
        {isMainHomePage ? (
          <MainNavbar />
        ) : isChildrenCoursePage ? (
          <CourseNavbar />
        ) : isAdultCoursePage ? (
          <CourseNavbarAdult />
        ) : isAdultHomePage ? (
          < NavigationAdult/>
        ) : isChildrenHomePage ? (
          <Navigati/> // Render children's home navigation
        ) : (
          <CourseNavbar /> // Default navigation for other children pages
        )}
        <main className="min-h-80">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
