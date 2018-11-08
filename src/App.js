import React, { Component } from 'react';
import './App.scss';
import PokemonInfo from './PokemonInfo';
import Pokedex from './Pokedex';

class App extends Component {
  state = {
    pokemonInfo: [],
    name: '',
    type: '',
    subtype: '',
    height: '',
    weight: '',
    sprite: '',
    inputValue: ''
  }
  getPokemon = async (e) => {
    const pokemonName = e.target.elements.pokemonName.value;

    e.preventDefault();
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    // const subtype = data.types[1].type.name;
    const data = await apiCall.json();
    this.setState({
      pokemonInfo: data,
      name: data.name,
      type: data.types[0].type.name,
      // subtype: data.includes(data.types[1].type.name) && data.types[1].type.name,
      height: data.height,
      weight: data.weight,
      sprite: data.sprites.front_default,
      inputValue: ''
    });
  }
  onInputChange(value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    const { name, type, subtype, height, weight, sprite } = this.state;
    return (
      <div className="App">
        <h1>Pokedex</h1>

        <form onSubmit={this.getPokemon}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.inputValue}
            onChange={e => this.onInputChange(e.target.value)} />
          <input type="submit" value="Search"/>
        </form>
        <Pokedex
        sprite={sprite}/>
        <PokemonInfo
          name={name}
          type={type}
          subtye={subtype}
          height={height}
          weight={weight}
          sprite={sprite} />
      </div>
    );
  }
}

export default App;
