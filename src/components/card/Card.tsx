interface CardProps {
  name: string;
  image: string;
}

export default function Card({ name, image }: CardProps) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-md aspect-[2/3] bg-neutral-900">
        <img
          className="h-auto w-auto object-cover transition-all group-hover:scale-105 aspect-[2/3]"
          src={image}
          alt={name}
        />
      </div>
      <div className="h-14 p-2">
        <h5 className="leading-tight font-medium tracking-tight group-hover:text-black dark:group-hover:text-white">
          {name}
        </h5>
      </div>
    </article>
  )
}
