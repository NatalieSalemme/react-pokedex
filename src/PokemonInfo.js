import React from 'react';

const PokemonInfo = props => {
  const { name, type, subtype, height, weight, sprite } = props;
  let roundedWeight = Math.round((weight / 4.536) * 10) /10;
  return (
    <div>
    <img
      src={sprite}
      alt={name} />
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>{type}</p>
      <p>{subtype}</p>
      <p>{height}</p>
      <p>{roundedWeight} lbs</p>

    </div>
  );
}
export default PokemonInfo;
