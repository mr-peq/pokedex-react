import { useState, useEffect } from 'react';
import TypeButton from './TypeButton';

import '../SearchBar.css'

export default function SearchBar(props) {

  const {
    onTypeChange,
  } = props;

  const [typeButtons, setTypeButtons] = useState([]);

  const getAllTypes = () => {
    const url = "http://localhost:3000/types";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then((types) => {
      const typeButtons = types.map(type => (
        <TypeButton
          key={type.id}
          onTypeChange={onTypeChange}
          {...type}
        />
      ));
      setTypeButtons(typeButtons);
    });
  }

  useEffect(() => {
    getAllTypes();
  }, []);


  return (
    <>
      <div className="types">{typeButtons}</div>
    </>
  )
}
