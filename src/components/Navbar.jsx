import PropTypes from "prop-types";

function Navbar({ pokemonList, setPokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, item) => (
        <button key={item} onClick={() => setPokemonIndex(item)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

// 2. Supprimer les boutons "précédent" et "suivant" : dans le composant NavBar, commence par supprimer les boutons "précédent" et "suivant".

// 3. Générer un bouton pour chaque Pokémon : utilise la méthode map pour parcourir pokemonList directement dans la partie return du composant NavBar (pense à passer les props manquantes de App vers NavBar). Pour chaque Pokémon, génère un bouton avec son nom. Assure-toi d'ajouter une key unique à chaque bouton pour aider React à identifier les éléments de manière efficace.

Navbar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default Navbar;
