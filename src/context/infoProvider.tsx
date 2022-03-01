import React from 'react';
// import axios from 'axios';
import InfoContext from './infoContext';

interface Props { 
    nameButton: string,
    handleClick:(e: Event) => void
  }

// interface contextTS {
//   value: object;
// }
  

const InfoProvider: React.FC<Props> = ({ children }) => {

  const contextValues = {
    
  };

  return (
    // <InfoContext.Provider value={ contextValues }>
    //   { children }
    // </InfoContext.Provider> 
    <p>h</p>
  );
}

export default InfoProvider;
