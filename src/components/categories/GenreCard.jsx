import { useNavigate } from "react-router-dom";

export function GenreCard({ genre }) {
  const navigate = useNavigate();

  return (
    <div
      className="border border-neutral-200 dark:border-neutral-800 rounded-md p-4"
      onClick={() => {
        navigate(`/genres/${genre.id}`);
      }}
    >
      <h3 className="text-white font-medium rounded-lg">{genre.name}</h3>
      <p className="text-neutral-500">{genre.slug}</p>
    </div>
  );
}
