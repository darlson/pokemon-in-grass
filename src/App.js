import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Finder from './Components/Finder'
import Pokedex from './Components/Pokedex'
import axios from 'axios'


class App extends Component {
  constructor () {
    super()
    this.state = {
      caughtPokemon: [],
    }
    this.catchPokemon = this.catchPokemon.bind(this)
    this.saveName = this.saveName.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({ caughtPokemon: res.data })
    })
  }
  catchPokemon(name, image) {
    const body = {name, image}
    axios.post('/api/pokemon', body).then((res) => {
      this.setState({ caughtPokemon: res.data })
    })
  }
  saveName(id, newName) {
    const body = {newName}
    axios.put(`/api/pokemon/${id}`, body).then((res) => {
      this.setState({ caughtPokemon: res.data })
    })
  }
  releasePokemon(id) {
    axios.delete(`/api/pokemon/${id}`).then((res) => {
      this.setState({ caughtPokemon: res.data })
    })
  }


  render() {  
    return (
      <div className="App">
        <Header />
        App.js
        <Finder catchPokemon={this.catchPokemon} />
        <Pokedex 
          caughtPokemon={this.state.caughtPokemon} 
          saveName={this.saveName} 
          releasePokemon={this.releasePokemon}
        />
      </div>
    );
  }
}

export default App;
