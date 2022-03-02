import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import logoSorriso from '../images/logo-sorriso.png'
import TableSponsors from '../components/TableSponsors';
import { Link } from 'react-router-dom';
import { InfoContext } from '../context/infoContext-Provider';

const Sponsors = () => {
  const { requestSponsors } = useContext(InfoContext);

  useEffect(() => {
    const callRequest = async () => await requestSponsors()
    callRequest()
  }, [])

  return (
    <div className="sponsors-container">
      <NavBar/>

      <div className="sponsors-container-2">
      <h2> 
        <img src={logoSorriso} alt="logo Sorriso" width="40px"/> 
        Patrocinadores
      </h2>
      <p>Patrocinadores</p>
      
      <TableSponsors/>

      <Link to="/createSponsor" >
         + Adicionar Patrocinador
      </Link>
      </div>
  
    </div>
  )
}

export default Sponsors;