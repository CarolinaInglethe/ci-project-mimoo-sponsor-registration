import React from 'react';

interface Event { target: object }

interface Props { 
  nameButton: string,
  handleClick:(e: Event) => void
}

const GreenButton: React.FC<Props> = ({ nameButton, handleClick  }) => {
  return (
    <button 
      type="button" 
      className="green-button"
      onClick={ handleClick }
    >
      { nameButton }
    </button>
  )
};

export default GreenButton;