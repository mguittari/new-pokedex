import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Ivysaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    name: "Venusaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Charmeleon",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    name: "Charizard",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex !== 0 && (
        <button onClick={handleClickPrevious}>Previous</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Next</button>
      )}
    </div>
  );
}

export default App;

//   Rendu conditionnel pour les boutons : Ajoute du rendu conditionnel pour n'afficher le bouton "précédent" que si pokemonIndex > 0 (en français : "il y a bien un précédent"), et le bouton "suivant" que si pokemonIndex < pokemonList.length - 1 (en français : "il y a bien un suivant").
