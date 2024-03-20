import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
import pokemonList from "../src/pokemonData.json";

import { useState, useEffect } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const changePokemonOnClick = (item) => {
    setPokemonIndex(item);
  };

  useEffect(() => {
    console.info(
      "Hello Pokemon trainer, are you ready to gotta catch 'em all ?"
    );
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar
        changePokemonOnClick={changePokemonOnClick}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
