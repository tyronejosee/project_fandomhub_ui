import Image from 'next/image';
import trailersData from "../../data/trailers.json";

interface Trailer {
  id: number;
  name: string;
  image: string;
}

export default function TrailerList() {
  const trailers: Trailer[] = trailersData;

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {trailers.map((trailer) => (
          <article
            key={trailer.id}
            className="bg-red-500 w-full h-32 rounded-md overflow-hidden"
          >
            <img
              className="w-full h-full"
              src={trailer.image}
              alt={trailer.name}
            />
            {/* <Image
              src={trailer.image}
              alt={trailer.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            /> */}
          </article>
        ))}
      </section>
    </>
  )
}
