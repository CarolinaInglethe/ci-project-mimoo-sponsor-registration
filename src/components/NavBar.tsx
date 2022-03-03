import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoMimoo from '../images/logo-mimoo.png';
import logoGrafico from '../images/logo-grafico.png'
import logoSorriso from '../images/logo-sorriso.png'
import { InfoContext } from '../context/infoContext-Provider';

const NavBar = () => {
  const { infoUserLogin } = useContext(InfoContext)

  return (
    <div className="nav-bar-container">
    <img src={logoMimoo} alt="logo" />

    <Link to="/dashboard"> 
      <img src={logoGrafico} alt="logo grafico" width="25px" />
      Dashboard 
    </Link>
    <Link to="/sponsors">
        <img src={logoSorriso} alt="logo sorriso" width="25px"/>
        Patrocinadores
    </Link>
    
    <span className="nav-sair">
    {infoUserLogin.email}
      <Link to="/login">
        SAIR
      </Link>
    </span>
    
    </div>
    
  )
};

export default NavBar;