const Sidebar = () => {
  return (
    <aside className="flex flex-col z-0 w-0 sm:w-1/4 h-full transition-transform duration-300 translate-x-full sm:translate-x-0 bg-neutral-100 dark:bg-neutral-900 p-4 space-y-4">
      <nav className="w-full h-96 p-2 rounded-lg border border-neutral-700 space-y-2">
        <div className="flex justify-between items-center bg-fuchsia-700 rounded-md px-2 py-1">
          <h2>Top Airing Anime</h2>
          <span className="text-xs">More</span>
        </div>
      </nav>
      <nav className="w-full h-96 p-2 rounded-lg border border-neutral-700 space-y-2">
        <div className="flex justify-between items-center bg-fuchsia-700 rounded-md px-2 py-1">
          <h2>Top Airing Anime</h2>
          <span className="text-xs">More</span>
        </div>
      </nav>
      <nav className="w-full h-96 p-2 rounded-lg border border-neutral-700 space-y-2">
        <div className="flex justify-between items-center bg-fuchsia-700 rounded-md px-2 py-1">
          <h2>Most Popular Anime</h2>
          <span className="text-xs">More</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
