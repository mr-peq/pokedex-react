import { useState, useEffect } from 'react'

import PokedexTable from './PokedexTable'
import SearchBar from './SearchBar';

export default function FilteredPokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [typeButtons, setTypeButtons] = useState([]);

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
      setPokemons(data);
    })
  }

  const getAllTypes = () => {
    const url = "http://localhost:3000/types";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(types => setTypeButtons(types));
  }

  useEffect(() => {
    getAllTypes();
  }, []);

  useEffect(() => {
    changePokemons();
  }, []);


  return(
    <>
      <SearchBar
        onTypeChange={onTypeChange}
        types={typeButtons}
      />
      <PokedexTable pokemons={pokemons}/>
    </>
  )
}
