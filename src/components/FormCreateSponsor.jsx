import React from 'react';
import { Link } from 'react-router-dom';


const FormCreateSponsor = () => {
 
  return (
    <div className="form-create-sponsor-container">
      <form>
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="CNPJ" />
        <input type="text" placeholder="Saldo de pontos" />
      </form>

      <div className="form-create-sponsor-buttons">
        <Link to="/sponsors" >Cancelar</Link>
        <Link to="/createSponsor" >
          Pŕoximo
        </Link>
      </div>
    </div>
  )
}

export default FormCreateSponsor;
