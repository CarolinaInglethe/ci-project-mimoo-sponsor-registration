import React from 'react';
import FormCreateSponsor1 from '../components/FormCreateSponsor1';
import NavBar from '../components/NavBar';
import logoSorriso from '../images/logo-sorriso.png'

const CreateSponsor = () => {
  return (
    <div className="create-sponsor-container">
      <NavBar />

      <div className="create-sponsor-container-2">
      <h2>
        <img src={logoSorriso} alt="logo sorriso" width="40px"/>
        Cadastro Patrocinador
      </h2>
      <p>Patrocinadores {'>'} Cadastro Patrocinador</p>

      <FormCreateSponsor1 />
      </div>
      
    </div>
  )
}

export default CreateSponsor;