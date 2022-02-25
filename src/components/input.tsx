import React from 'react';
import Proptypes from 'prop-types'

interface Props {
  inputplaceholder: string;
  name: string;
  type: string;
}

const Input: React.FC<Props> = ({ inputplaceholder, name, type }) => {
  return (
    <label htmlFor={name}>
      <input
        placeholder={inputplaceholder}
        name={name}
        type={type}
        className="inputs"
      />
    </label>
  );
}

Input.propTypes = {
  inputplaceholder: Proptypes.string.isRequired,
}

export default Input;
