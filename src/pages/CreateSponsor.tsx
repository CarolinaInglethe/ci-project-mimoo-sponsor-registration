import React, { useContext } from 'react';
import FormCreateSponsor1 from '../components/FormCreateSponsor1';
import FormCreateSponsor2 from '../components/FormCreateSponsor2';
import FormCreateSponsor3 from '../components/FormCreateSponsor3';
import NavBar from '../components/NavBar';
import { InfoContext } from '../context/infoContext-Provider';
import logoSorriso from '../images/logo-sorriso.png'

const CreateSponsor = () => {
  const { numberPagesForm } = useContext(InfoContext);

  const PagesForm = () => {
    if (numberPagesForm === 1) return <FormCreateSponsor1 />
    if (numberPagesForm === 2) return <FormCreateSponsor2 />
    if (numberPagesForm === 3) return <FormCreateSponsor3 />
    return <p>Carregando</p>
  }

  return (
    <div className="create-sponsor-container">
      <NavBar />

      <div className="create-sponsor-container-2">
      <h2>
        <img src={logoSorriso} alt="logo sorriso" width="40px"/>
        Cadastro Patrocinador
      </h2>
      <p>Patrocinadores {'>'} Cadastro Patrocinador</p>

      {
        PagesForm()
      }
      </div>
      
    </div>
  )
}

export default CreateSponsor;