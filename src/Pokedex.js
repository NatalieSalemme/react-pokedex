import React from 'react'

const Pokedex = props => (
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
        <div className="green-screen"></div>
      </div>

      <div className="control-pad">
        <div className="up"></div>
        <div className="right"></div>
        <div className="down"></div>
        <div className="left"></div>
      </div>
    </div>
  </div>
);
export default Pokedex;
