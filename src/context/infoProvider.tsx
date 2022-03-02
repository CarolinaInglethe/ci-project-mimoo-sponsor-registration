import React, { useState } from 'react';
// import axios from 'axios';
import InfoContext from './infoContext';

interface Props { 
    nameButton: string,
    handleClick:(e: Event) => void
}

interface stateInfoUser { email: string; password: string}

interface AppContextInterface {
  infoUserLogin: object,
  setInfoUserLogin: object,
}
  
const InfoProvider: React.FC<Props> = ({ children }) => {
  const [ infoUserLogin, setInfoUserLogin ] = useState<stateInfoUser>({ email:'', password:'' })

  const contextValues: AppContextInterface = {
    infoUserLogin,
    setInfoUserLogin,
  };

  return (
    <InfoContext.Provider values={ contextValues }>
      { children }
    </InfoContext.Provider> 
  );
}

export default InfoProvider;
