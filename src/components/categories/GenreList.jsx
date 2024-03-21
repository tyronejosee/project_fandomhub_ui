import { useEffect, useState } from "react";
import { getGenres } from "../../services/genres";
import { GenreCard } from "./GenreCard";

export function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const res = await getGenres();
      setGenres(res.data.results);
    }
    loadGenres();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-2">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
