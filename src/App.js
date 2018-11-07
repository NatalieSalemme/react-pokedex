import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


class App extends Component {
  state = {
    pokemon: []
  }
  getPokemon = async (e) => {
    e.preventDefault();
    const apiCall = await fetch('https://pokeapi.co/api/v2/pokemon/1/');

    const data = await apiCall.json();
    this.setState({ pokemon: data });
    console.log(this.state.pokemon);
  }
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <form onSubmit={this.getPokemon}>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
