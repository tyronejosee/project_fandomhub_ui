import Link from 'next/link'

export const Ranking = () => {
  return (
    <ul>
      <li>
        <Link
          href={"/article"}
          className="py-2 flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-800"
        >
          <span className="inline-flex w-4 items-center rounded-md font-bold">
            50
          </span>
          <img
            className="w-8 h-12 aspect-w-8 aspect-h-12 object-cover rounded border border-neutral-200 dark:border-neutral-800"
            src="https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
            alt="Frieren"
          />
          <div className="w-full">
            <h3 className="text-sm font-medium">
              Frieren: Beyond Journey's End
            </h3>
            <span className="block text-xs text-neutral-500">
              TV, 28 eps, scored 9.18
            </span>
            <span className="block text-xs text-neutral-500">
              595,345 members
            </span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
