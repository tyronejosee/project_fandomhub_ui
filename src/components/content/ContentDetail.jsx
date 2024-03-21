import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Badge from '../common/Badge';

const ContentDetail = () => {
  return (
    <section>
      <div className="py-2 px-4 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="font-medium">Animes</span>
          <ChevronRightIcon className="w-4 h-4" />
          <span className="font-medium">Chainsaw Man</span>
        </div>
      </div>
      <div className="md:flex p-4 border-b border-neutral-200 dark:border-neutral-800">
        <img
          className="mx-auto rounded-md h-96 aspect-auto"
          src="https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
          alt="Chainsaw Man"
        />
        <div className="md:ml-4 space-y-1">
          <h2 className="text-3xl font-bold tracking-tightd text-balance">
            Chainsaw Man
          </h2>
          <span className="block text-lg font-medium">Chainsaw Manu</span>
          <span className="block text-lg font-medium">チェンソーマン</span>
          <Badge text="Action" />
          <Badge text="Fantasy" />
          <div
            id="stats"
            className="inline-flex items-center border border-neutral-200 dark:border-neutral-800 rounded-md h-16 px-4 space-x-4"
          >
            <span className="font-bold text-lg">Ranked #123</span>
            <span className="font-bold text-lg">Popularity #79</span>
            <span className="font-bold text-lg">Members 1,482,188</span>
            <button className="">Add to my List</button>
            <button className="">Add to Favorites</button>
          </div>
          <h3>Information</h3>
          <span>Type: TV</span>
          <span>Status: Finished Airing</span>
          <span>Aired: Oct 12, 2022 to Dec 28, 2022</span>
          <span>Premiered: Fall 2022</span>
          <span>Studios: MAPPA</span>
          <span>Source: Manga</span>
          <span>Genres: Action, Fantasy</span>
          <span>Theme: Gore</span>
          <span>Demographic: Shounen</span>
          <span>Duration: 24 min. per ep.</span>
          <span>Rating: R - 17+ (violence & profanity)</span>

          <h3>Website</h3>
          <a href="">Oficcial Site</a>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-base">Synopsis</h3>
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
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-base">Reviews</h3>
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
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
