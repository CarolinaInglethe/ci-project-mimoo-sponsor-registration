import React from 'react';
import ButtonsNextBackForm from './ButtonsNextBackForm';
import NumberPagesForm from './NumberPagesForm';


const FormCreateSponsor3 = () => {
 
  return (
    <div className="form-create-sponsor-1">
      <NumberPagesForm />
      <p>Form 3</p>
      <form>
        <div>
        <h3>Marcas</h3>
        <button>Vincular marcas</button>
        </div>
        <div>
            Nenhuma marca selecionada
        </div>
      </form>

      <ButtonsNextBackForm />
    </div>
  )
}

export default FormCreateSponsor3;