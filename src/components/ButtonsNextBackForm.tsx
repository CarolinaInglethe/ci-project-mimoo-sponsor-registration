import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';
import { useNavigate } from 'react-router-dom';


const ButtonsNextBackForm = () => {
  const { numberPagesForm, setNumberPagesForm } = useContext(InfoContext);

  const navigate = useNavigate()

  const handleClickBackForm = () => {
    if (numberPagesForm === 1) {
      return navigate('/sponsors')
    }
    return setNumberPagesForm( numberPagesForm - 1 )
  }

  const handleClickNextForm = () => {
    if (numberPagesForm === 3) {
      return alert('Cadastrado com Sucesso !')
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