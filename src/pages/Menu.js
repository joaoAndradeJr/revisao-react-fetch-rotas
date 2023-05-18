import React, { Component } from 'react';
import './Menu.css';
import { baseURL } from '../utils/types';
import CharacterCard from '../components/CharacterCard';

export default class Menu extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    fetch(`${baseURL}/?limit=10&skip=387`)
      .then((response) => response.json())
      .then((data) => this.setState({ characters: data }))
      .catch((error) => console.error(error.message));
  }
  /*
    const minhaFuncaoAssincrona = async () => {
      try{
        const response = await fetch(`${baseURL}/?limit=10&skip=387`);
        const data = await response.json();
        this.setState({ characters: data })
      } catch (error) {
        console.error(error.message);
      }
  */

  render() {
    const { characters } = this.state;
    return (
      <div className="menu-container">
        {
          characters.map((character) => (
            <CharacterCard
              key={ character.id }
              name={ character.name }
              image={ character.image }
            />
          ))
        }
      </div>
    );
  }
}
