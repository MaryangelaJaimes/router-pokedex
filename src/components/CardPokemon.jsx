import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Pokedex from "../assets/pokedex1.png";

const CardPokemon = ({ pokemon }) => {
  const { name, height, weight, types, abilities, sprites, stats } = pokemon;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="position-relative p-2">
          <img
            src={Pokedex}
            alt="Imagen"
            className="pokedex-image"
            style={{ maxWidth: "780px" }}
          />
          <div className="pokemon-container">
            <img
              src={sprites.other.dream_world.front_default}
              alt={name}
              className="pokemon-image"
            />
          </div>
          <div className="border text-success bg-dark pokemon-details">
            <h3>{name}</h3>
            <span className="card-text">Altura: {height * 10} Centímetros</span>
            <p className="card-text">Peso: {weight / 10} Kg</p>
            <span className="card-text">
              Tipo: {types.map((type) => type.type.name).join(", ")}
            </span>
            <p className="card-text">
              Habilidades:{" "}
              {abilities.map((ability) => ability.ability.name).join(", ")}
            </p>
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="card-text p-2">
                  <ProgressBar
                    variant="warning"
                    now={stat.base_stat}
                    label={`${stat.stat.name}: ${stat.base_stat}%`}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
