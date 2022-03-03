import { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

type  ContextProps = { 
  children: ReactNode;
}

type contextType = {
  infoUserLogin: {
    email: string;
    password: string;
  };
  setInfoUserLogin: (nextState: {email: string, password: string}) => void;
  requestSponsors: () => void;
  infoSponsors: {
      name:string;
      situation: string;
      certified: boolean;
      totalBrands: number;
      totalActivedBrands: number;
      lastCampaign: string;
      status: string;
    }[]
}

const initialState = {
  infoUserLogin: {
    email: '',
    password: '',
  },
  setInfoUserLogin: () => {} ,
  requestSponsors: () => {},
  infoSponsors: [
    {
      name: '',
      situation:  '',
      certified: true,
      totalBrands: 0,
      totalActivedBrands: 0,
      lastCampaign:  '',
      status:  '',
    },
  ]
};


export const InfoContext = createContext<contextType>(initialState)

export const InfoProvider = ({ children }: ContextProps) => {
  const [ infoUserLogin, setInfoUserLogin ] = useState(initialState.infoUserLogin);
  const [ infoSponsors , setInfoSponsors] = useState(initialState.infoSponsors)

  const requestSponsors = async () => {
    await axios.get('https://virtserver.swaggerhub.com/mimoo-tech/frontend-portal-challenge-api/1.0.0/sponsors')
    .then((res) => setInfoSponsors(res.data))
    .catch((err) => console.log(err))
  }

  return (
    <InfoContext.Provider value={ 
      { 
        infoUserLogin,
        setInfoUserLogin,
        requestSponsors,
        infoSponsors,
      } 
    }>
      { children }
    </InfoContext.Provider> 
  );
}