import React from 'react';

function Input({ inputplaceholder, name, type }) {
  return (
    <label htmlFor={ name }>
        <input
          placeholder={ inputplaceholder }
          name={ name }
          type={ type } 
          className="inputs"
        />
    </label>
  )
}

export default Input;