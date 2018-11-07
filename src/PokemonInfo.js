import React from 'react';

const PokemonInfo = props => {
  const { name, type, height, weight, sprite } = props;
  return (
    <div>
    <img
      src={sprite}
      alt={name} />
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>{type}</p>
      <p>{height}</p>
      <p>{weight}</p>

    </div>
  );
}
export default PokemonInfo;
