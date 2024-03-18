import { Link } from "react-router-dom";

const Article = () => {
  return (
    <Link
      to="/article"
      className="flex hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-neutral-800 p-2 border border-neutral-950 rounded-xl"
    >
      <img
        className="object-cover h-24 rounded-md aspect-square"
        src="https://www.geekmi.news/__export/1689612113420/sites/debate/img/2023/07/17/disexo_sin_txtulo_x2x.jpg_554688468.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between px-4 leading-normal">
        <h5 className="text-sm font-medium text-neutral-300">
          Which Wholesome Romance Novel Should Be Adapted to Manga?
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Here are the 10 finalists from the MAL x Honeyfeed Writing Contest
          2023! Try them out and let us know which web novels you want to see
          brought to life as published light novel or manga.
        </p>
        <div className="text-sm">
          <p>
            by <span className="underline">Tyrone Jose</span> |{" "}
            <span>29.000 views</span> | <span>Spoiler</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
