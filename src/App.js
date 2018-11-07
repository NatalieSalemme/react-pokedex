import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import PokemonInfo from './PokemonInfo';


class App extends Component {
  state = {
    pokemonInfo: [],
    name: '',
    type: '',
    height: '',
    weight: '',
    sprite: ''
  }
  getPokemon = async (e) => {
    e.preventDefault();
    const apiCall = await fetch('https://pokeapi.co/api/v2/pokemon/1/');

    const data = await apiCall.json();
    this.setState({
      pokemonInfo: data,
      name: data.name,
      type: data.types[1].type.name,
      height: data.height,
      weight: data.weight,
      sprite: data.sprites.front_default
    });
    console.log(this.state.pokemonInfo);
  }
  render() {
    const { name, type, height, weight, sprite } = this.state;
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <form onSubmit={this.getPokemon}>
          <input type="submit" />
        </form>
        <PokemonInfo
          name={name}
          type={type}
          height={height}
          weight={weight}
          sprite={sprite} />
      </div>
    );
  }
}

export default App;
