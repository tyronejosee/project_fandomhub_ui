import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const NavigationMenu = ({ items }) => {
  // Example items
  // const navigationItems = [
  //   { name: "Home", path: "/" },
  //   { name: "Anime", path: "/anime" },
  //   { name: "Chainsaw Man", path: "/chainsaw-man" },
  // ];

  return (
    <nav className="py-2 px-4 border-b border-neutral-200 dark:border-neutral-800">
      <ol className="flex items-center gap-4">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link className="font-medium" to={item.path}>
              {item.name}
            </Link>
            {index !== items.length - 1 && (
              <ChevronRightIcon className="w-4 h-4" />
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default NavigationMenu;
