import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';

interface targetInputs {
  target : {
    name: string,
    value: string,
  }
}

const AccountTypeForm = () => {
  const { infoSponsorRegister, setInfoSponsorRegister } = useContext(InfoContext);
  
  const handleChangeSponsorRegister = ({target: {name,value}}: targetInputs ) => {
    setInfoSponsorRegister({
      ...infoSponsorRegister,
      [name]: value
    });
    console.log(infoSponsorRegister)
  }
 
  return (
    <div>
        <div>
          <h3>Selecione o tipo de conta</h3>
            <input
              type="radio"
              id="industria"
              name="accountType"
              value="Indústria"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="industria">Indústria</label>

            <input
              type="radio"
              id="varejo"
              name="accountType"
              value="Varejo"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="varejo">Varejo</label>

            <input
              type="radio"
              id="shopping"
              name="accountType"
              value="Shopping"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="shopping">Shopping</label>

            <input
              type="radio"
              id="agencia"
              name="accountType"
              value="Agência"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="agencia">Agência</label>
        </div>
    </div>
  )
}

export default AccountTypeForm;