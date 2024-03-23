import PropTypes from "prop-types";

function Navbar({ pokemonList, changePokemonOnClick }) {
  const handlePokemonClick = (item) => {
    changePokemonOnClick(item);
    if (pokemonList[item].name === "Pikachu") {
      console.info("Pika pikachu !!!");
    }
  };
  return (
    <div>
      {pokemonList.map((pokemon, item) => (
        <button
          key={item}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => handlePokemonClick(item)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

Navbar.propTypes = {
  changePokemonOnClick: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default Navbar;
