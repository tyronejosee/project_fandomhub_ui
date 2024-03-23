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

  // inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px]

  // fixed right-4 bottom-4 px-4 py-2 bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800 shadow rounded-lg transition-opacity duration-300

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-white hover:bg-primary/90 h-9 px-4 rounded-lg shadow-lg ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ButtonScrollTop;
