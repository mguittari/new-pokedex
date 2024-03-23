import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure className="border border-black rounded-2xl max-w-md mb-2 mt-2 mx-auto bg-red-600 shadow-xl">
      {pokemon.imgSrc ? (
        <img
          className="mx-auto border border-black rounded-2xl mt-12 w-80 h-80 bg-white shadow-xl"
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
      ) : (
        <figcaption>???</figcaption>
      )}
      <figcaption className="font-mono text-3xl mb-12 mt-12 text-white">
        {pokemon.name}
      </figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
