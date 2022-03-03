import React from 'react';
import { Link } from 'react-router-dom';


const FormCreateSponsor = () => {
 
  return (
    <form className="form-create-sponsor">
      <div>
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="CNPJ" />
        <input type="text" placeholder="Saldo de pontos" />
      </div>

      <div className="form-create-sponsor-buttons">
        <Link to="/sponsors" >Voltar</Link>
        <Link to="/createSponsor" >
          Pŕoximo
        </Link>
      </div>
    </form>
  )
}

export default FormCreateSponsor;
