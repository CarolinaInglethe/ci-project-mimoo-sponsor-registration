import React from 'react';

const TableSponsors = () => {
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
            <tr>
              {
                columns.map((colum, index) => (
                  <td key={index}>{colum}</td>
                ))
              }
            </tr>
            <tr> 
              <td>hello</td>
              <td>hello</td>
            </tr>
        </table>
    </div>
  )
}

export default TableSponsors;