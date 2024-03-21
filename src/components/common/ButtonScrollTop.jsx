import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ButtonScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed inline-flex items-center justify-center right-4 bottom-4 bg-fuchsia-700/90 backdrop-blur-md text-white shadow w-10 h-10 rounded-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUpIcon className="w-4 h-4" />
    </button>
  );
};

export default ButtonScrollTop;
