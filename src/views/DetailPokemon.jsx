import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardPokemon from "../components/CardPokemon";
import Spinner from "react-bootstrap/Spinner";

const DetailPokemon = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [name]);

  return (
    <div>
      {pokemonData ? (
        <CardPokemon pokemon={pokemonData} />
      ) : (
        <p className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </p>
      )}
    </div>
  );
};

export default DetailPokemon;
