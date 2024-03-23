import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const getTypeColorClass = (type) => {
    switch (type) {
      case "water":
        return "bg-gradient-to-b from-blue-700 to-cyan-500";
      case "fire":
        return "bg-gradient-to-b from-red-600 to-yellow-500";
      case "grass":
        return "bg-gradient-to-b from-green-600 to-lime-600";
      case "electric":
        return "bg-gradient-to-b from-yellow-300 to-yellow-500";
      case "normal":
        return "bg-gradient-to-b from-pink-500 to-rose-400";
      case "poison":
        return "bg-gradient-to-b from-fuchsia-700 to-purple-600";
      default:
        return "bg-gray-400";
    }
  };
  return (
    <figure
      className={`rounded-2xl max-w-md mb-2 mt-2 mx-auto shadow-x pt-1 ${getTypeColorClass(
        pokemon.type
      )}`}
    >
      {pokemon.imgSrc ? (
        <img
          className="mx-auto border rounded-2xl mt-12 w-80 h-80 bg-white shadow-x"
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
      ) : (
        <figcaption>???</figcaption>
      )}
      <figcaption className="font-mono text-3xl text-white mt-10 pb-10">
        {pokemon.name}
      </figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
