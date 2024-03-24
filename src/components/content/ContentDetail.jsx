import NavigationMenu from "../common/NavigationMenu";
import Badge from "../common/Badge";
import Button from "../common/Button";

const ContentDetail = () => {
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Anime", path: "/anime" },
    { name: "Chainsaw Man", path: "/animes" },
  ];

  return (
    <>
      <NavigationMenu items={navigationItems} />
      <section className="mt-4 relative md:flex p-4 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="z-10 rounded-md w-96 aspect-[2/3] mx-auto lg:mx-0 overflow-hidden">
          <img
            src="https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
            alt="Chainsaw Man"
            className="w-full"
          />
        </div>
        <div className="h-[300px] overflow-hidden absolute inset-0 opacity-30">
          <div className="bg-gradient-to-t from-neutral-950 from-10% to-transparent absolute inset-0"></div>
          <img
            id="banner"
            src="https://www.nintenderos.com/wp-content/uploads/2022/11/portada_chainsaw-man-92.jpg"
            alt="Backgroound"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="relative w-full ml-8">
          <div className="z-10">
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight z-100">
              Chainsaw Man
            </h1>
            <h2 className="block text-lg font-medium">Chainsaw Manu</h2>
            <h2 className="block text-lg font-medium">チェンソーマン</h2>
            <Button variant="primary">Add to Favorites</Button>
            <Button variant="secondary">Add to my list</Button>
            <Badge text="Action" />
            <Badge text="Fantasy" />
            <div>
              <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
                Information
              </h3>
              <span className="block">Type: TV</span>
              <span className="block">Status: Finished Airing</span>
              <span className="block">Aired: Oct 12, 2022 to Dec 28, 2022</span>
              <span className="block">Premiered: Fall 2022</span>
              <span className="block">Studios: MAPPA</span>
              <span className="block">Source: Manga</span>
              <span className="block">Genres: Action, Fantasy</span>
              <span className="block">Theme: Gore</span>
              <span className="block">Demographic: Shounen</span>
              <span className="block">Duration: 24 min. per ep.</span>
              <span className="block">
                Rating: R - 17+ (violence & profanity)
              </span>
              <span className="block">
                Website: <a href="">Oficcial Site</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 space-y-4">
        <div
          id="stats"
          className="flex border justify-center items-center border-neutral-200 dark:border-neutral-800 rounded-md h-16 px-4 space-x-4 "
        >
          <span className="font-bold text-lg">Ranked #123</span>
          <span className="font-bold text-lg">Popularity #79</span>
          <span className="font-bold text-lg">Members 1,482,188</span>
        </div>
        <article className="space-y-2">
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Synopsis
          </h3>
          <p className="text-sm">
            Denji is robbed of a normal teenage life, left with nothing but his
            deadbeat father's overwhelming debt. His only companion is his pet,
            the chainsaw devil Pochita, with whom he slays devils for money that
            inevitably ends up in the yakuza's pockets. All Denji can do is
            dream of a good, simple life: one with delicious food and a
            beautiful girlfriend by his side. But an act of greedy betrayal by
            the yakuza leads to Denji's brutal, untimely death, crushing all
            hope of him ever achieving happiness. Remarkably, an old contract
            allows Pochita to merge with the deceased Denji and bestow devil
            powers on him, changing him into a hybrid able to transform his body
            parts into chainsaws. Because Denji's new abilities pose a
            significant risk to society, the Public Safety Bureau's elite devil
            hunter Makima takes him in, letting him live as long as he obeys her
            command. Guided by the promise of a content life alongside an
            attractive woman, Denji devotes everything and fights with all his
            might to make his naive dreams a reality.
          </p>
        </article>
        <article className="space-y-2">
          <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Reviews
          </h3>
          <p className="text-sm">
            Denji is robbed of a normal teenage life, left with nothing but his
            deadbeat father's overwhelming debt. His only companion is his pet,
            the chainsaw devil Pochita, with whom he slays devils for money that
            inevitably ends up in the yakuza's pockets. All Denji can do is
            dream of a good, simple life: one with delicious food and a
            beautiful girlfriend by his side. But an act of greedy betrayal by
            the yakuza leads to Denji's brutal, untimely death, crushing all
            hope of him ever achieving happiness. Remarkably, an old contract
            allows Pochita to merge with the deceased Denji and bestow devil
            powers on him, changing him into a hybrid able to transform his body
            parts into chainsaws. Because Denji's new abilities pose a
            significant risk to society, the Public Safety Bureau's elite devil
            hunter Makima takes him in, letting him live as long as he obeys her
            command. Guided by the promise of a content life alongside an
            attractive woman, Denji devotes everything and fights with all his
            might to make his naive dreams a reality.
          </p>
        </article>
      </section>
    </>
  );
};

export default ContentDetail;
