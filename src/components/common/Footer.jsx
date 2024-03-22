import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="w-full mx-auto p-4 md:py-8 space-y-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="sm:flex sm:items-center sm:justify-center border-b border-neutral-100 dark:border-neutral-800 pb-8">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/about"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to={"/support"} className="hover:underline me-4 md:me-6">
                Support
              </Link>
            </li>
            <li>
              <Link
                to={"/advertising"}
                className="hover:underline me-4 md:me-6"
              >
                Advertising
              </Link>
            </li>
            <li>
              <Link to={"/faq"} className="hover:underline me-4 md:me-6">
                FAQ
              </Link>
            </li>
            <li>
              <Link to={"/terms"} className="hover:underline me-4 md:me-6">
                Terms
              </Link>
            </li>
            <li>
              <Link to={"/privacy"} className="hover:underline me-4 md:me-6">
                Privacy
              </Link>
            </li>
            <li>
              <Link to={"/cookie"} className="hover:underline me-4 md:me-6">
                Cookie
              </Link>
            </li>
            <li>
              <Link to={"/sitemap"} className="hover:underline me-4 md:me-6">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 FandomHub - All Rights Reserved.
          </span>
          <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
