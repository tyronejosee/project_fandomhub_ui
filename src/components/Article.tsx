import Link from "next/link";

export const Article = () => {
  return (
    <Link
      href={"/article/detail"}
      className="group flex py-2 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="overflow-hidden rounded-md aspect-[1/1] bg-neutral-900">
        <img
          className="h-28 w-28 object-cover transition-all group-hover:scale-105 aspect-[1/1]"
          src="https://www.geekmi.news/__export/1689612113420/sites/debate/img/2023/07/17/disexo_sin_txtulo_x2x.jpg_554688468.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between pl-4 leading-normal">
        <h5 className="group-hover:text-black dark:group-hover:text-white text-base font-medium">
          Which Wholesome Romance Novel Should Be Adapted to Manga?
        </h5>
        <p className="text-neutral-500">
          Here are the 10 finalists from the MAL x Honeyfeed Writing Contest
          2023! Try them out and let us know which web novels you want to see
          brought to life as published light novel or manga.{" "}
          <span className="text-radical-600 font-medium">More</span>
        </p>
        <div className="flex gap-4">
          <p>
            by <span className="font-medium">Tyrone Jose</span>
          </p>
          <p>29.000 views</p>
          <p className="text-red-500 font-medium">Spoiler</p>
        </div>
      </div>
    </Link>
  )
}
