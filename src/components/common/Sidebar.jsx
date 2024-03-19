const Sidebar = () => {
  return (
    <aside className="flex flex-col z-0 w-0 sm:w-1/4 h-full transition-transform duration-300 translate-x-full sm:translate-x-0  p-4 space-y-4">
      <section className="w-full h-96 rounded-md border border-neutral-200 dark:border-neutral-800 space-y-2 p-4">
        <h2 className="text-center text-2xl font-medium">Top Airing Anime</h2>
        <span className="text-xs">More</span>
      </section>
    </aside>
  );
};

export default Sidebar;
