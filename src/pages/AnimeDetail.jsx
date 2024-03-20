const AnimeDetail = ({ anime }) => {
  return (
    <div className="container">
      <h1 className="bg-red-500">Details{id}</h1>
      <img src={anime.image} alt={anime.name} />
      <p className="dark:text-white">{anime.name}</p>
    </div>
  );
};

export default AnimeDetail;
