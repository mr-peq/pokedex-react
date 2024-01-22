import { useState, useEffect } from 'react'
import PokedexTable from './PokedexTable'
import TypeButton from './TypeButton';
import '../SearchBar.css'

export default function FilteredPokedex() {
  const [query, setQuery] = useState("grass");
  const [typeButtons, setTypeButtons] = useState([]);


  const changeQuery = (e) => {
    const string = e.currentTarget.value;
    // setQuery(string);
    const url = `http://localhost:3000/pokemons?types=${string}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
  }

  const getTypes = () => {
    const url = "http://localhost:3000/types";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then((types) => {
      const buttons = types.map(type => TypeButton(type.name));
      setTypeButtons(buttons);
    });
  }

  useEffect(() => {
    getTypes();
  }, []);


  return(
    <>
      <div className="types">
        {typeButtons}
      </div>
      <PokedexTable query={query}/>
    </>
  )
}
