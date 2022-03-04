import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ButtonsNextBackForm = () => {
  const { numberPagesForm, setNumberPagesForm, infoSponsorRegister } = useContext(InfoContext);

  const navigate = useNavigate()

  const handleClickBackForm = () => {
    if (numberPagesForm === 1) {
      return navigate('/sponsors')
    }
    return setNumberPagesForm( numberPagesForm - 1 )
  }

  const handleClickNextForm = async () => {
    if (numberPagesForm === 3) {
      const registerSponser = await axios.post('https://virtserver.swaggerhub.com/mimoo-tech/frontend-portal-challenge-api/1.0.0/sponsors', infoSponsorRegister)
      .then((res) => res)
      .catch((err) => err)
      return alert( `${registerSponser}` )
    }
    return setNumberPagesForm( numberPagesForm + 1)
  }

  return (
    <div className="form-create-sponsor-buttons">

      <button onClick={ handleClickBackForm }>
        Voltar
      </button>
      <button onClick={ handleClickNextForm }  >
        Pŕoximo 
      </button>
      
    </div>
  )
}

export default ButtonsNextBackForm;