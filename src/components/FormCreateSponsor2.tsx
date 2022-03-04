import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';


const FormCreateSponsor2 = () => {
  const { infoSponsorRegister, setInfoSponsorRegister } = useContext(InfoContext);


  interface targetInputs {
    target : {
      name: string,
      value: string,
    }
  }

  const handleChangeSponsorRegister = ({target: {name,value}}: targetInputs ) => {
      setInfoSponsorRegister({
        ...infoSponsorRegister,
        [name]: value
      });
    }
   

  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm numberPageActive="2"/>
      <form>
        <h3>Responsável pela conta</h3>
        <input
          type="text"
          placeholder="Nome"
          name="contactName"
          value={infoSponsorRegister.contactName}
          onChange={ handleChangeSponsorRegister }
        />
        <input
          type="email"
          placeholder="Email"
          name="contactEmail"
          value={ infoSponsorRegister.contactEmail }
          onChange={ handleChangeSponsorRegister }
        />
        <input
          type="text"
          placeholder="Celular"
          name="contactPhone"
          value={ infoSponsorRegister.contactPhone }
          onChange={ handleChangeSponsorRegister }
        />
      </form>

      <p style={{ color:"red" }}>Esse será o usuário com maiores permissões de acesso ao portal de indústria</p>
      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor2;