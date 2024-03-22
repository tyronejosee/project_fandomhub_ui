const Card = ({ name, image }) => {
  return (
    <article>
      <div className="overflow-hidden rounded-md aspect-[2/3] bg-neutral-900">
        <img
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[2/3]"
          src={image}
          alt={name}
        />
      </div>
      <div className="h-14 p-2">
        <h5 className="leading-tight font-medium tracking-tight text-gray-900 dark:text-white hover:text-violet-600">
          {name}
        </h5>
      </div>
    </article>
  );
};

export default Card;
