import React from 'react';
import NavBar from '../components/NavBar';
import logoSorriso from '../images/logo-sorriso.png'
import TableSponsors from '../components/TableSponsors';

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
      
      <TableSponsors/>
      </div>

    </div>
  )
}

export default Sponsors;