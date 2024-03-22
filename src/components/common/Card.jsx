const Card = ({ name, image }) => {
  return (
    <article className="w-full rounded-md">
      <img
        className="w-full aspect-w-9 aspect-h-16 rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-800"
        src={image}
        alt={name}
      />
      <div className="h-14 p-2">
        <h5 className="leading-tight font-medium tracking-tight text-gray-900 dark:text-white hover:text-violet-600">
          {name}
        </h5>
      </div>
    </article>
  );
};

export default Card;
