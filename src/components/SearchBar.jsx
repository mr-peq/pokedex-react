import { useState, useEffect } from 'react';
import TypeButton from './TypeButton';

import '../SearchBar.css'
import '../Button.css'

export default function SearchBar(props) {

  const {
    onTypeChange,
    types,
    onIncludeChange,
  } = props;

  const typeButtons = types.map(type =>
      <TypeButton key={type.id} onTypeChange={onTypeChange} {...type} />
  );

  return (
    <>
      <div className="types">{typeButtons}</div>
      <div className="include-exclude">
        <div className="include-btn selected" onClick={onIncludeChange}>include</div>
        <div className="exclude-btn" onClick={onIncludeChange}>exclude</div>
      </div>
    </>
  )
}
