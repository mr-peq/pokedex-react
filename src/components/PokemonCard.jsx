import { useState } from 'react'
import '../PokemonCard.css'

export default function PokemonCard(props) {
  const {
    index,
    sprite,
    name
  } = props;

  return (
    <>
      <div className="pokemon-card">
        <img className="pokemon-card-picture" src={sprite} alt="A pokemon" />
        <div className="pokemon-card-details">
          <p>#{index} - {name}</p>
        </div>
      </div>
    </>
  );
}
