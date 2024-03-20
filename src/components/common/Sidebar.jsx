import RankingList from "../ranking/RankingList";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[110px] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] overflow-y-auto border-r dark:border-neutral-800 space-y-8">
      <section>
        <h2 className="text-lg font-medium">Top Airing Anime</h2>
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
      </section>
      <section>
        <h2 className="text-lg font-medium">Top Airing Anime</h2>
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
