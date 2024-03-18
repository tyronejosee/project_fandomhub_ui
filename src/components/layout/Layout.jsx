import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";
import SubNavbar from "../common/SubNavbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = !location.pathname.includes("/help/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar />
      <section className="max-w-screen-xl flex mx-auto">
        <div className={showSidebar ? "w-3/4" : "w-full"}>{children}</div>
        {showSidebar && <Sidebar />}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
