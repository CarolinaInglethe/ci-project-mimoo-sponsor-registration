import React from 'react';
import { Link } from 'react-router-dom';


const ButtonsNextBackForm = () => {
  return (
    <div className="form-create-sponsor-buttons">
      <Link to="/sponsors" >Voltar</Link>
      <Link to="/createSponsor" >
        Pŕoximo
      </Link>
    </div>
  )
}

export default ButtonsNextBackForm;