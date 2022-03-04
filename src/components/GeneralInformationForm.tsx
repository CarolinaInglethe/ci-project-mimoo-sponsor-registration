import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';

interface targetInputs {
  target : {
    name: string,
    value: string,
  }
}

const GeneralInformationForm = () => {
  const { infoSponsorRegister, setInfoSponsorRegister } = useContext(InfoContext);
  
  const handleChangeSponsorRegister = ({target: {name,value}}: targetInputs ) => {
    setInfoSponsorRegister({
      ...infoSponsorRegister,
      [name]: value
    });
  }
 
  return (
    <div>
        <div>
        <h3>Informações gerais</h3>
        {/* <input type="image" alt="Clique para adicionar uma imagem" /> */}
        <input
          type="text" 
          name="name" 
          value={infoSponsorRegister.name} 
          placeholder="Empresa"
          onChange={ handleChangeSponsorRegister }
        />
        <input
          type="text"
          name="cnpj"
          value={infoSponsorRegister.cnpj}
          placeholder="CNPJ"
          onChange={ handleChangeSponsorRegister }
        />
        <input
          type="number"
          name="points"
          value={ infoSponsorRegister.points <= 0 ? "Saldo de pontos" : infoSponsorRegister.points }
          placeholder="Saldo de pontos"
          onChange={ handleChangeSponsorRegister }
        />
        <label htmlFor="prospect">
          Prospect ?
          <input 
            type="checkbox"
            name="situation"
            id="prospect"
            value="prospect"
            onChange={ handleChangeSponsorRegister }
          />
        </label>
        <label htmlFor="homologada">
          Homologada ?
          <input 
            type="checkbox" 
            name="certified" 
            id="homologada"
            value="homologada"
            onChange={ handleChangeSponsorRegister }
          />
        </label>
        </div>
    </div>
  )
}

export default GeneralInformationForm;