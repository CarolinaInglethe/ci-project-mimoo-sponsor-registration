import { createContext } from 'react';

const initalState = {
  isOpenModal: false,
  setIsOpenModal: () => {} ,
};

const InfoContext = createContext(initalState)

export default InfoContext;