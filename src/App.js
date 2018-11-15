import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer';

import Pokedex from './components/Pokedex';

class App extends Component {
  state = {
    pokemonInfo: [],
    name: '',
    type: '',
    height: '',
    weight: '',
    sprite: '',
    backSprite: '',
    inputValue: '',
    id: '',
    blinking: false,
    error: false
  }

  getPokemon = async (e) => {
    try {
      const pokemonName = e.target.elements.pokemonName.value;
      e.preventDefault();
      const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
      const data = await apiCall.json();
      this.setState({
        pokemonInfo: data,
        name: data.name,
        type: data.types[0].type.name,
        height: data.height,
        weight: data.weight,
        sprite: data.sprites.front_default,
        id: data.id,
        inputValue: '',
        blinking: true,
      });

    } catch(err) {
      this.setState({
        error: true
      });
      console.log(err.message);

    }
  }
  onRight = async (e) => {
    let id = this.state.id + 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    this.setState({
      pokemonInfo: data,
      name: data.name,
      type: data.types[0].type.name,
      height: data.height,
      weight: data.weight,
      sprite: data.sprites.front_default,
      id: data.id,
      inputValue: '',
    });
  }
  onLeft = async (e) => {
    let id = this.state.id - 1;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    this.setState({
      pokemonInfo: data,
      name: data.name,
      type: data.types[0].type.name,
      height: data.height,
      weight: data.weight,
      sprite: data.sprites.front_default,
      id: data.id,
      inputValue: '',
      error: false
    });
  }
  onBackSprite = async (e) => {
    let id = this.state.id;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    this.setState({
      sprite: data.sprites.back_default,
    });
  }
  onFrontSprite = async (e) => {
    let id = this.state.id;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await apiCall.json();
    this.setState({
      sprite: data.sprites.front_default,
    });
  }

  onInputChange(value) {
    this.setState({
      inputValue: value,
      error: false
    });
  }
  onEnter = () => {
    this.setState({
      blinking: !this.state.blinking
    });
  }
  render() {
    const { name, type, height, weight, sprite, id, blinking } = this.state;
    return (
      <div className="App">
        <div className="column">
          <Pokedex
            sprite={sprite}
            name={name}
            type={type}
            height={height}
            weight={weight}
            id={id}
            onRight={this.onRight}
            onLeft={this.onLeft}
            blinking={blinking}
            onFrontSprite={this.onFrontSprite}
            onBackSprite={this.onBackSprite}
            onEnter={this.onEnter}
          />
        </div>
        <div className="column">
          <h1>Pok&eacute;dex</h1>
          {/* Error handling to handle if input is empty and if entered pokemon is invalid */}
            <br />
            {this.state.error && !this.state.inputValue && <h3>Please Enter A Pokemon</h3> }
          {this.state.error && this.state.inputValue && <h3>Pokemon Not Found</h3>}
          <form onSubmit={this.getPokemon}>
            <br />
            <input
              className="poke-input"
              type="text"
              name="pokemonName"
              value={this.state.inputValue}
              onChange={e => this.onInputChange(e.target.value)} />
              <br />

            <input
              className="search-btn"
              type="submit"
              value="Search"/>
          </form>
        <Footer />
        </div> {/* end of input and footer column */}
      </div>
    );
  }
}

export default App;
