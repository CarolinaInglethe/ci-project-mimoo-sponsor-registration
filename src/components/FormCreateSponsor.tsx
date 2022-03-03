import React from 'react';
import ButtonsNextBackForm from './ButtonsNextBackForm';


const FormCreateSponsor = () => {
 
  return (
    <div className="form-create-sponsor">
      <form>
        <div>
        <h3>Informações gerais</h3>
        <input type="image" alt="Clique para adicionar uma imagem" />
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
          <select name="tipoDeConta" id="tipoDeConta">
            <option value="industria">Indústria</option>
            <option value="varejo">Varejo</option>
            <option value="shopping">Shopping</option>
            <option value="agencia">Agência</option>
          </select>
        </div>
        <div>
          <h3>Selecione o tipo de Plano</h3>
          <select name="tipoDePlano" id="tipoDePlano">
            <option value="prepago">Pré-pago</option>
            <option value="pospago">Pós-pago</option>
          </select>
        </div>
        
      </form>

      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor;
