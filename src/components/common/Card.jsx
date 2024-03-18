const Card = ({ name, image }) => {
  return (
    <div className="w-full bg-stone-100 border border-stone-300 rounded-lg dark:bg-slate-800 dark:hover:bg-gray-700 dark:border-gray-700 p-2">
      <a href="#">
        <img
          className="rounded h-60 bg-stone-500"
          src={image}
          alt={name}
        />
      </a>
      <div className="py-2 px-1">
        <a href="#">
          <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white hover:text-violet-600">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Card;
