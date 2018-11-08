import React from 'react'

const Pokedex = props => {
  const { name, type, subtype, height, weight, sprite } = props;
  //converting weight from hectograms to pounds
  let roundedWeight = Math.round((weight / 4.536) * 10) /10;
  //concerting height from decimeters to feet
  let actualFeet = height / 3.048;
  let feet = Math.floor(actualFeet);
  let inches = Math.round((actualFeet - feet) * 12);
  let heightInFeet = `${feet}'${inches}`;
  return (
  <div className="pokedex-container">
    <div className="top-buttons">
      <div className="lightup-blue"></div>
      <div className="three-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div className="image-container">
      <div className="gray-container">
        <div className="two-dot-container">
          <div></div>
          <div></div>
        </div>
        <div className="poke-image">
        {props.sprite && <img
          src={props.sprite}
          alt={props.name}
           /> }

        </div>
        <div className="under-poke-image">
          <div className="red-dot"></div>
          <div className="lines-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        </div>

    </div>
    <div className="controls-container">
      <div className="enter-btn">
        <div></div>
      </div>
      <div className="middle-btns">
        <div className="blue-pink-btns">
          <button></button>
          <button></button>
        </div>
        <div className="green-screen">
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
        <p>{subtype}</p>
        <p>Height: {heightInFeet} ft</p>
        <p>Weight: {roundedWeight} lbs</p>
        </div>
      </div>

      <div className="control-pad">
        <div>
          <div className="up"></div>
        </div>
        <div className="lbr">
          <div className="left"></div>
          <div className="base">
            <div className="base-circle"></div>
            </div>
          <div className="right"></div>
        </div>
        <div>
          <div className="down"></div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Pokedex;
