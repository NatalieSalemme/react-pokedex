import React from 'react';

const PokemonInfo = props => {
  const { name, type, height, weight } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{height}</p>
      <p>{weight}</p>

    </div>
  );
}
export default PokemonInfo;
