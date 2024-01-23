import { useState, useEffect } from 'react'

import PokedexTable from './PokedexTable'
import SearchBar from './SearchBar';

export default function FilteredPokedex() {
  const [pokemons, setPokemons] = useState([]);

  const onTypeChange = (e) => {
    const button = e.currentTarget;
    button.classList.toggle('selected');
    changePokemons();
  }

  const changePokemons = () => {
    const selectedTypes = document.querySelectorAll('.custom-btn.selected');
    const query = [];
    selectedTypes.forEach(button => {
      query.push(button.innerText);
    });
    const url = `http://localhost:3000/pokemons?types=${query.join('+')}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setPokemons(data);
    })
  }

  useEffect(() => {
    changePokemons();
  }, []);


  return(
    <>
      <SearchBar onTypeChange={onTypeChange} />
      <PokedexTable pokemons={pokemons}/>
    </>
  )
}
