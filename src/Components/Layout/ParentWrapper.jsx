import {  Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header.jsx";
import Navbar from "../Pages/Navbar/Navbar.jsx";
import Footer from "../Pages/Footer/Footer.jsx";

const ParentWrapper = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* Content */}
      <Outlet />
      {/* Content */}
      <Footer />
    </>
  );
};

export default ParentWrapper;
