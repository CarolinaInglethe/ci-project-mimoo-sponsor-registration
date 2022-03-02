import { createContext, ReactNode, useState } from 'react';

type  ContextProps = { 
  children: ReactNode;
}

type contextType = {
  infoUserLogin: boolean;
  setInfoUserLogin: (nextState: boolean) => void;
}

const initalState = {
  infoUserLogin: false,
  setInfoUserLogin: () => {} ,
};


export const InfoContext = createContext<contextType>(initalState)

export const InfoProvider = ({ children }: ContextProps) => {
  const [ infoUserLogin, setInfoUserLogin ] = useState(initalState.infoUserLogin)

  return (
    <InfoContext.Provider value={ 
      { 
        infoUserLogin,
        setInfoUserLogin,
      } 
    }>
      { children }
    </InfoContext.Provider> 
  );
}