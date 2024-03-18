import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ButtonPrimary from "./ButtomPrimary";

const Navbar = () => {
  const handleMessage = () => {
    alert("Pending logic");
  };

  return (
    <header className="sticky top-0 z-30 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo.svg"
            className="h-8 aspect-square"
            alt="FandomHub Logo"
          />
          <span
            c
            lassName="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            FandomHub
          </span>
        </Link>
        <SearchBar />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ButtonPrimary onClick={handleMessage}>Get started</ButtonPrimary>
          {/* <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
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
