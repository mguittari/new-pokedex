import PropTypes from "prop-types";

function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <>
      {pokemonIndex !== 0 && (
        <button onClick={handleClickPrevious}>Previous</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Next</button>
      )}
    </>
  );
}

Navbar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default Navbar;
