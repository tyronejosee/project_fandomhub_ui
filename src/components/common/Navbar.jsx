import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import SearchBar from "./SearchBar";
import Button from "./Button";
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
          <Button
            variant="secondary"
            onClick={handleChangeTheme}
            icon={<BeakerIcon />}
          >
            Theme
          </Button>
          <Button variant="secondary" onClick={notify}>
            Login
          </Button>
          <Button variant="primary" onClick={notify}>
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
