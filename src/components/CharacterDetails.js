import React, { Component } from 'react';
import './CharacterCard.css';
import Loading from './Loading';
import '../pages/Menu.css';

class CharacterDetails extends Component {
  render() {
    const { loading } = this.state;

    if (loading) return <div className="menu"><Loading /></div>;

    return (
      <div className="cartoon-card__container">
        <div className="cartoon-card">
          <img src={image} alt={name} className="cartoon-card__image" />
          <h2 className="cartoon-card__name">{name}</h2>
          <p className="cartoon-card__gender">Gender: {gender}</p>
          <p className="cartoon-card__hair-color">Hair Color: {hairColor}</p>
          <p className="cartoon-card__occupation">Occupation: {occupation}</p>
          <p className="cartoon-card__first-episode">First Episode: {firstEpisode}</p>
          { relatives.length > 0 && ( <h3>Realtives</h3> ) }
          { relatives.map((relative, index) => (
            <p key={ index } className="cartoon-card__relatives">{ relative.name }</p>
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
