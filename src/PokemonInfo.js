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
    <div className="pokemon-info-container">
  


    </div>
  );
}
export default PokemonInfo;
