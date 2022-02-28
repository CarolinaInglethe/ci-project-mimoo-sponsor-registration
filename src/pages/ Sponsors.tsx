import React from 'react';
import NavBar from '../components/NavBar';
import logoSorriso from '../images/logo-sorriso.png'

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <NavBar/>

      <div>
      <h2> 
        <img src={logoSorriso} alt="logo Sorriso" width="40px"/> 
        Patrocinadores
      </h2>
      <p>Patrocinadores</p>
      <h3>Tabela</h3>
      </div>

    </div>
  )
}

export default Sponsors;