import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import SubNavbar from "../common/SubNavbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col min-h-screen">
        <Sidebar />
        <div className="pl-0 lg:pl-[20.5rem]">
          <SubNavbar />
          {children}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Layout;
