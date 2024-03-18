const SearchBar = () => {
  return (
    <div className="order-3 sm:order-2 w-full lg:max-w-lg sm:w-full sm:mx-0">
      <div className="relative">
        <form method="GET" action="#">
          <input
            type="search"
            id="search-navbar"
            className="bg-neutral-100 dark:bg-neutral-800 rounded-xl w-full h-8 px-4 focus:outline-none focus:ring focus:ring-primary placeholder-neutral-400 text-sm dark:placeholder-neutral-600 text-center focus:text-left focus:pl-12 border border-neutral-700"
            placeholder="Search Anime, Manga, and more..."
            name="search"
            // defaultValue={new URLSearchParams(window.location.search).get("search")}
          />
          <div className="absolute rounded-full inset-y-0 left-0 p-4 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center p-4">
            <span className="text-xs font-bold text-neutral-700">CTRL K</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
