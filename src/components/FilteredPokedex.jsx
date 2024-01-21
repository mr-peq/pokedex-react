import { useState } from 'react'
import PokedexTable from './PokedexTable'

export default function FilteredPokedex() {
  const [query, setQuery] = useState("grass")

  const changeQuery = (e) => {
    const string = e.currentTarget.value;
    setQuery(string);
  }

  return(
    <>
      <input type="text" onChange={changeQuery} />
      <PokedexTable query={query}/>
    </>
  )
}
