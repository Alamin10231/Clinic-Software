import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Outlet, useLocation } from "react-router";
import bgimage from "../src/Image/image 1.png"
export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isHeader = location.pathname === "/header";

  return (
    <div>
      {/* HOME PAGE */}
      {(isHome || isHeader) ? (
        <div className="" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      ) : (
        /* OTHER PAGES */
        <>
          <Navbar />
          <Outlet />
          
        </>
      )}
    </div>
  );
}
