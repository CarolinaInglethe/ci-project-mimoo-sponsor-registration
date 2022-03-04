import React from 'react';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';

const FormCreateSponsor1 = () => {
 
  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm numberPageActive="1"/>
      
      <form>
        <div>
        <h3>Informações gerais</h3>
        {/* <input type="image" alt="Clique para adicionar uma imagem" /> */}
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="CNPJ" />
        <input type="text" placeholder="Saldo de pontos" />
        <label htmlFor="prospect">
          Prospect ?
          <input type="checkbox" name="prospect" id="prospect" />
        </label>
        <label htmlFor="homologada">
          Homologada ?
          <input type="checkbox" name="homologada" id="homologada" />
        </label>
        </div>
        <div>
          <h3>Selecione o tipo de conta</h3>
            <input type="radio" id="industria" name="tipoconta" value="Indústria"/>
            <label htmlFor="industria">Indústria</label>

            <input type="radio" id="varejo" name="tipoconta" value="Varejo"/>
            <label htmlFor="varejo">Varejo</label>

            <input type="radio" id="shopping" name="tipoconta" value="Shopping"/>
            <label htmlFor="shopping">Shopping</label>

            <input type="radio" id="agencia" name="tipoconta" value="Agência"/>
            <label htmlFor="agencia">Agência</label>
        </div>
        <div>
            <h3>Selecione o tipo de Plano</h3>
            <input type="radio" id="planoprepago" name="tipoplano" value="Pré-pago"/>
            <label htmlFor="planoprepago">Pré-pago</label>

            <input type="radio" id="planopospago" name="tipoplano" value="Pós-pago"/>
            <label htmlFor="planopospago">Pós-pago</label>
        </div>
      </form>

      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor1;
