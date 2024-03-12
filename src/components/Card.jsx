
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-neutral-100 shadow-md rounded-xl overflow-hidden p-2">
      <img className="w-full aspect-square rounded-xl" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;