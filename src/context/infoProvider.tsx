import React from 'react';
// import axios from 'axios';
import InfoContext from './infoContext';

interface Props { 
    nameButton: string,
    handleClick:(e: Event) => void
  }

interface contextTS {
  value: object;
}
  

const InfoProvider: React.FC<Props> = ({ children }) => {

  const contextValues = {
    
  };

  return (
  // diponibiliza os estados e funcoes para o context
  //  ira englobar toda aplicaçao e fornecer esses estados e funcoes
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider> 
  );
}

export default InfoProvider;
