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
    inputValue: '',
    id: ''
  }
  getPokemon = async (e) => {
    const pokemonName = e.target.elements.pokemonName.value;
    let id = this.state.id;
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
      id: data.id,
      inputValue: '',

    });
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
    });
  }

  onInputChange(value) {
    this.setState({
      inputValue: value
    });
  }
  componentDidMount = () => {
    const json = localStorage.getItem("pokemon");
    const pokemon = JSON.parse(json);
    this.setState({
      pokemonInfo: pokemon
    });
  }
  componentDidUpdate = () => {
    const pokemon = JSON.stringify(this.state.pokemonInfo);
    localStorage.setItem("pokemon", pokemon);
  }
  render() {
    const { name, type, subtype, height, weight, sprite, id } = this.state;
    return (
      <div className="App">
        <h1>Pok&eacute;dex</h1>

        <form onSubmit={this.getPokemon}>
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
        <Pokedex
          sprite={sprite}
          name={name}
          type={type}
          height={height}
          weight={weight}
          id={id}
          onRight={this.onRight}
          onLeft={this.onLeft}
        />
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
