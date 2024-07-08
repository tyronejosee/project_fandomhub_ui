import RankingList from "../ranking/Ranking";

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[60px] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] overflow-y-auto space-y-8 pr-4">
      <section>
        <div className="flex justify-between">
          <h2 className="text-lg font-medium">Top Airing Anime</h2>
        </div>

        <nav className="flex justify-center w-full h-9 rounded-lg dark:bg-neutral-800 p-1">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-neutral-950 data-[state=active]:text-foreground data-[state=active]:shadow relative">
            Anime
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-neutral-950 data-[state=active]:text-foreground data-[state=active]:shadow relative">
            Anime
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-neutral-950 data-[state=active]:text-foreground data-[state=active]:shadow relative">
            Anime
          </button>
        </nav>

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
  )
}
