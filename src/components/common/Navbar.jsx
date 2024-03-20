import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import SearchBar from "./SearchBar";
import ButtonPrimary from "./ButtomPrimary";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const notify = () => toast.success("Notificación de ejemplo");

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-b shadow">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-2 flex flex-wrap items-center justify-between ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo.svg"
            className="h-8 aspect-square"
            alt="FandomHub Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FandomHub
          </span>
        </Link>
        <SearchBar />

        <div className="flex md:order-4 space-x-2 rtl:space-x-reverse">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-200 dark:text-neutral-800 shadow hover:bg-fuchsia-600/10 h-9 px-4 py-2"
            onClick={handleChangeTheme}
          >
            <BeakerIcon className="h-4 w-4 text-fuchsia-500 mr-2" />
            Theme
          </button>
          <ButtonPrimary onClick={notify}>Login</ButtonPrimary>
          <ButtonPrimary onClick={notify}>Sign Up</ButtonPrimary>
          {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
