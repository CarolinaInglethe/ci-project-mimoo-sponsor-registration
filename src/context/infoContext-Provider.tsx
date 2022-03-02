import { createContext, ReactNode, useState } from 'react';

type  ContextProps = { 
  children: ReactNode;
}

type contextType = {
  infoUserLogin: {
    email: string;
    password: string;
  };
  setInfoUserLogin: (nextState: {email: string, password: string}) => void;
}

const initalState = {
  infoUserLogin: {
    email: '',
    password: '',
  },
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