import React from 'react'

const Pokedex = props => {
  const { name, type, height, weight, sprite, blinking, onBackSprite, onFrontSprite, onLeft, onRight } = props;
  //converting weight from hectograms to pounds
  let roundedWeight = Math.round((weight / 4.536) * 10) /10;
  //converting height from decimeters to feet
  let actualFeet = height / 3.048;
  let feet = Math.floor(actualFeet);
  let inches = Math.round((actualFeet - feet) * 12);
  let heightInFeet = `${feet}'${inches}`;
  return (
  <div className="pokedex-container">
    <div className="top-buttons">
      {/* Activates blue button blinking animation class if Pokedex is turned on and user has entered a valid Pokemon */}
      <div className={blinking ? 'blinking' : 'lightup-blue'}>
      </div>
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
          {/*only renders if user has entered a valid pokemon name or id and pokedex is on*/}
        <div className="poke-image">
        {blinking && <img
          src={sprite}
          alt={name}
           /> }
        </div>
        <div className="under-poke-image">
          <div className="red-dot"></div>
          {/*contains stacked lines for gray container */}
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
      <div
      className="enter-btn"
      onClick={props.onEnter}>
        <div></div>
      </div>
      <div className="middle-btns">
        <div className="orange-blue-btns">
        {/* Reveals back Pokemon pose */}
          <button
            onClick={onBackSprite}
          ></button>
          {/* Reveals front Pokemon pose */}
          <button
            onClick={onFrontSprite}></button>
        </div>
        {/* Only displays green screen text if pokedex state is on */}
        <div className="green-screen">
        {blinking &&
            <div>
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            <p>Height: {heightInFeet} ft</p>
            <p>Weight: {roundedWeight} lbs</p>
            <p>Id: #{props.id}</p>
          </div>
        }
        </div>
      </div>

      <div className="control-pad">
        <div>
          <div className="up"></div>
        </div>
        <div className="lbr">
          <div
          className="left"
          onClick={onLeft}></div>
          <div className="base">
            <div className="base-circle"></div>
            </div>
          <div
          className="right"
          onClick={onRight}
          ></div>
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
