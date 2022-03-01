import React from 'react';
import Proptypes from 'prop-types'

interface evInputs2 { 
  value: string;
  name: string;
}

interface Event { target: evInputs2; }

interface Props {
  inputplaceholder: string;
  name: string;
  type: string;
  handleChange:  (e: Event) => void;
}

const Input: React.FC<Props> = ({ inputplaceholder, name, type, handleChange }) => {
  return (
    <label htmlFor={name}>
      <input
        placeholder={inputplaceholder}
        name={name}
        type={type}
        className="inputs"
        onChange={ handleChange }
      />
    </label>
  );
}

Input.propTypes = {
  inputplaceholder: Proptypes.string.isRequired,
}

export default Input;
