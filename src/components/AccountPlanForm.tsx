import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';

interface targetInputs {
  target : {
    name: string,
    value: string,
  }
}

const AccountPlanForm = () => {
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
            <h3>Selecione o tipo de Plano</h3>
            <input
              type="radio"
              id="planoprepago"
              name="accountPlan"
              value="Pré-pago"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="planoprepago">Pré-pago</label>

            <input
              type="radio"
              id="planopospago"
              name="accountPlan"
              value="Pós-pago"
              onChange={ handleChangeSponsorRegister }
            />
            <label htmlFor="planopospago">Pós-pago</label>
        </div>
    </div>
  )
}

export default AccountPlanForm;