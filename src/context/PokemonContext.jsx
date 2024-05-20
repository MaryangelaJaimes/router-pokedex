import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setPokemonList(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handlePokemonChange = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonList, selectedPokemon, handlePokemonChange }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
