import React from 'react';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';


const FormCreateSponsor2 = () => {
 
  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm />
      <p>Form 2</p>
      <form>
        <h3>Responsável pela conta</h3>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Celular" />
      </form>

      <p style={{ color:"red" }}>Esse será o usuário com maiores permissões de acesso ao portal de indústria</p>
      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor2;