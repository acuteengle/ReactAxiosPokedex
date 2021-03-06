import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PokemonData = ({ pokemon }) => {
  const name = pokemon.species.name; //str
  const abilities = pokemon.abilities; // [{name: "lightning-rod"}]
  const pokemonNumber = pokemon.id; // int
  const stats = pokemon.stats; // {base_stat: 90, stat{name:"speed"}}
  const types = pokemon.types; // [{name: "electric"}]
  const height = pokemon.height; // int
  const weight = pokemon.weight; // int
  const sprite = pokemon.sprites.front_default; // str
  return (
    <div>
      <img src={sprite} />
      <h2>
        {name} # ({pokemonNumber})
      </h2>
      <hr />
      <h3>Height</h3>
      <p>{height}</p>
      <h3>Weight</h3>
      <p>{weight}</p>
      <h3>Types</h3>
      <ul>
        {types.map((type) => {
          return <li>{type.type.name}</li>;
        })}
      </ul>
      <h3>Abilities</h3>
      <ul>
        {abilities.map((ability) => {
          return <li>{ability.ability.name}</li>;
        })}
      </ul>
      <h3>Base Stats</h3>
      <ul>
        {stats.map((stat) => {
          return (
            <li>
              {stat.stat.name}: {stat.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonData;
