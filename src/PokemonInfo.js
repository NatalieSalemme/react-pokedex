import React from 'react';

const PokemonInfo = props => {
  const { name, type, subtype, height, weight, sprite } = props;
  //converting weight from hectograms to pounds
  let roundedWeight = Math.round((weight / 4.536) * 10) /10;
  //concerting height from decimeters to feet
  let actualFeet = height / 3.048;
  let feet = Math.floor(actualFeet);
  let inches = Math.round((actualFeet - feet) * 12);
  let heightInFeet = `${feet}'${inches}`;
  return (
    <div>
    <img
      src={sprite}
      alt={name} />
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      <p>{subtype}</p>
      <p>{heightInFeet} ft</p>
      <p>{roundedWeight} lbs</p>

    </div>
  );
}
export default PokemonInfo;
