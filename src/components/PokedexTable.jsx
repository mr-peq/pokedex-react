import PokemonCard from "./PokemonCard";

export default function PokedexTable({ query }) {

  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://www.goodstickers.fr/4589/pokemon-bulbasaur.jpg"
    }, {
      id: 2,
      name: "Ivysaur",
      types: ["grass", "poison"],
      sprite: "https://i.pinimg.com/736x/e7/91/72/e79172fef348260adb1de1406b332deb.jpg",
    }, {
      id: 3,
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite: "https://i.etsystatic.com/20838977/r/il/2afa41/4292447434/il_570xN.4292447434_cmm0.jpg",
    }];

    const selectedPokemons = pokemonArray.filter((pokemon) => pokemon.types.includes(query));

    const pokemonCards = selectedPokemons.map(pokemon => PokemonCard(pokemon));

  return(
    <>
      <div className="pokemon-table">
        {pokemonCards}
      </div>
    </>
  );
}
