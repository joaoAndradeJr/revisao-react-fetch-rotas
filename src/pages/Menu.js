import React, { Component } from 'react';
import { baseURL } from '../utils/types';
import Loading from '../components/Loading';
import CharacterCard from '../components/CharacterCard';
import './Menu.css';

export default class Menu extends Component {
  state = {
    loading: true,
    characters: [],
  };

  componentDidMount() {    
    fetch(`${baseURL}/?limit=10&skip=387`)
      .then((response) => response.json())
      .then((characters) => this.setState({ characters, loading: false }))
      .catch(err => console.error(err));
  }

  render() {
    const { loading, characters } = this.state;
    if (loading) return <div className="menu"><Loading /></div>;

    return (
      <div className="menu-container">
       { characters.map((character) => (
          <CharacterCard
            key={ character.id }
            image={ character.image }
            name={ character.name }
            id={ character.id }
          />
        ))}
      </div>
    );
  }
}
