import { SectionHeader } from "@/components";
import Image from "next/image";

const getAnimes = async (limit = 25, offset = 0) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const data = await fetch(`${baseUrl}/v1/animes/?limit=${limit}&offset=${offset}`)
      .then(res => res.json());

    // TODO: Add types
    const animes = data.results.map((anime: any) => ({
      id: anime.id,
      name: anime.name,
      image: anime.image,
      episodes: anime.episodes,
      aired_from: anime.aired_from,
      year: anime.year,
      genres: anime.genres,
      duration: anime.duration,
      score: anime.score,
      members: anime.members
    }));
    return animes;
  } catch (error) {
    console.error("Failed to fetch animes: ", error);
    return [];
  }
}

export default async function AnimePage() {
  const animes = await getAnimes(50);

  return (
    <main className="p-4 space-y-12">
      <SectionHeader title="Animes" subtitle="Subcategories pending." />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {
          animes.map((anime: any) => (
            <article key={anime.id} className="relative bg-red-500 p-2 rounded-sm">
              <div className="absolute bg-fuchsia-700 px-1 rounded right-2">
                <span className="text-xs">{anime.year}</span>
              </div>
              <Image src={anime.image} alt={anime.name} width={200} height={300} className="rounded" />
              <div className="flex h-12 py-1">
                <span>{anime.name}</span>
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}
