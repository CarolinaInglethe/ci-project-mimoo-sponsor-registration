import { createContext } from 'react';

const defaultState = {
    dark: false,
  };

const InfoContext = createContext(defaultState)

export default InfoContext;