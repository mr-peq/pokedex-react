import { useState } from 'react'
import '../PokemonCard.css'

export default function PokemonCard(pokemon) {

  const types = pokemon.types.join(', ');

  return (
    <>
      <div className="pokemon-card">
        <img className="pokemon-card-picture" src={pokemon.sprite} alt="A pokemon" />
        <div className="pokemon-card-details">
          <p>#{pokemon.id} - {pokemon.name}</p>
          <p>Type(s): {types}</p>
        </div>
      </div>
    </>
  );
}
