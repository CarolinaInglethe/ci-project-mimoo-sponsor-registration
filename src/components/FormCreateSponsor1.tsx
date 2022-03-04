import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';

interface targetInputs {
  target : {
    name: string,
    value: string,
  }
}

const FormCreateSponsor1 = () => {
  const { infoSponsorRegister, setInfoSponsorRegister } = useContext(InfoContext);
  
  const handleChangeSponsorRegister = ({target: {name,value}}: targetInputs ) => {
    setInfoSponsorRegister({
      ...infoSponsorRegister,
      [name]: value
    });
    console.log(infoSponsorRegister)
  }
 
  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm numberPageActive="1"/>
      
      <form>
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
      </form>

      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor1;
