import { useState, useEffect } from 'react'

import PokedexTable from './PokedexTable'
import SearchBar from './SearchBar';

export default function FilteredPokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [typeButtons, setTypeButtons] = useState([]);
  const [include, setInclude] = useState(true);

  const onTypeChange = (e) => {
    const button = e.currentTarget;
    button.classList.toggle('selected');
    changePokemons();
  }

  const onIncludeChange = () => {
    // Switch include/exclude by changing which button holds the class "selected"
    const includeExcludeButtons = document.querySelectorAll('.include-exclude > div');
    includeExcludeButtons.forEach(button => button.classList.toggle('selected'));
    setInclude(!include);
  }

  const changePokemons = () => {
    const query = getSelectedTypes();
    const url = buildUrl(query);

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

  const getSelectedTypes = () => {
    const selectedTypes = document.querySelectorAll('.custom-btn.selected');
    const query = [];
    selectedTypes.forEach(button => {
      query.push(button.innerText);
    });
    return query;
  }

  const buildUrl = (query) => {
    let url = "http://localhost:3000/pokemons?";
    url += include ? "types=" : "not_types=";
    url += query.join('+');
    return url
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
  }, [include]);


  return(
    <>
      <SearchBar
        onTypeChange={onTypeChange}
        types={typeButtons}
        onIncludeChange={onIncludeChange}
      />
      <PokedexTable pokemons={pokemons}/>
    </>
  )
}
