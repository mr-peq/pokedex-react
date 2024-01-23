import PokemonCard from "./PokemonCard";

export default function PokedexTable({ pokemons }) {

    const pokemonCards = pokemons.map(pokemon => (
      <PokemonCard key={pokemon.index} {...pokemon} />
    ));

  return(
    <>
      <div className="pokemon-table">
        {pokemonCards}
      </div>
    </>
  );
}
