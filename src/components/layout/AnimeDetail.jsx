const AnimeDetail = ({ match, location }) => {
  const { id } = match.params;
  const { name, image } = location.state;

  return (
    <div>
      <h1>Detalles del Anime {id}</h1>
      <img src={image} alt={name} />
      <p className="dark:text-white">{name}</p>
    </div>
  );
};

export default AnimeDetail;
