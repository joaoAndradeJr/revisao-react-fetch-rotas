import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CharacterCard.css';

export default class CharacterCard extends Component {
  render() {
    const { image, name, id } = this.props;

    return (
      <section className="cartoon-card">
        <img src={image} alt={name} className="cartoon-card__image" />
        <h2 className="cartoon-card__name">{name}</h2>
        <Link to={`/character/${id}`}>Details</Link>
      </section>
    )
  }
}
