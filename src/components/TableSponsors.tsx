import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext-Provider';

const TableSponsors = () => {
  const { infoSponsors } = useContext(InfoContext)

  const columns = [ 
    'Patrocinador', 'Situação', 'Homologada', 'Marcas Cadastradas', 
    'Marcas Ativas', 'Última ação', 'Status',
  ]
  return (
    <div className="table-container">
      <h3>
        Patrocinadores
      </h3>

      <table >
        <thead>
          <tr>
            {
              columns.map((colum, index) => (
                <th key={index}>{colum}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            infoSponsors ?
             infoSponsors.map((sponsor, index) => (
              <tr key={index}>
                <td>{sponsor.name}</td>
                <td>{sponsor.situation}</td>
                <td>{sponsor.certified}</td>
                <td>{sponsor.totalBrands}</td>
                <td>{sponsor.totalActivedBrands}</td>
                <td>{sponsor.lastCampaign}</td>
                <td>{sponsor.status}</td>
              </tr>
             ))
            : <h4>Carregando...</h4>
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableSponsors;