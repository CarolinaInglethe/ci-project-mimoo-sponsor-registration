import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import logoSorriso from '../images/logo-sorriso.png'
import TableSponsors from '../components/TableSponsors';
import { Link } from 'react-router-dom';
import { InfoContext } from '../context/infoContext-Provider';

const Sponsors = () => {
  const { requestSponsors, setNumberPagesForm } = useContext(InfoContext);

  useEffect(() => {
    const callRequest = async () => await requestSponsors()
    callRequest()
    setNumberPagesForm(1)
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

      <span className="link-purple">
        <Link to="/createSponsor" >
          + Adicionar Patrocinador
        </Link>
      </span>
      </div>
    </div>
  )
}

export default Sponsors;