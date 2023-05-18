import React, { Component } from 'react'
import './CharacterCard.css';
import { Link } from 'react-router-dom';

export default class CharacterCard extends Component {
  render() {
    const { image, name, id } = this.props;

    return (
      <section className="cartoon-card">
        <img src={image} alt={name} className="cartoon-card__image" />
        <h2 className="cartoon-card__name">{name}</h2>
        <Link to="/details">Details</Link>
      </section>
    )
  }
}
