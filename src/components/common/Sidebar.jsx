import RankingList from "../ranking/RankingList";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[60px] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] overflow-y-auto border-r dark:border-neutral-800 space-y-8 pr-4">
      <section>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium">Top Airing Anime</h2>
          <span className="">View all</span>
        </div>
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
      </section>
      <section>
        <h2 className="text-lg font-medium">Top Upcoming Anime</h2>
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
      </section>
      <section>
        <h2 className="text-lg font-medium">Most Popular Anime</h2>
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
      </section>
    </aside>
  );
};

export default Sidebar;
