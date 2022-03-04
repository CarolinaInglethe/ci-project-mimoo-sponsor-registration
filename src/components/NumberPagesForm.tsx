import React from 'react';

interface Props {
  numberPageActive: string;
}

const NumberPagesForm = ({ numberPageActive }: Props) => {
  return (
    <div className="number-pages" >
      <h4 className={ numberPageActive === "1" ? "number-pages-active" : "null" }>
        <p>1</p> Dados da conta 
      </h4>
      <h4 className={ numberPageActive === "2" ? "number-pages-active" : "null" }>
        <p>2</p>Administrador 
      </h4>
      <h4 className={ numberPageActive === "3" ? "number-pages-active" : "null" }> 
        <p>3</p>Marcas 
      </h4>
    </div>
  )
}

export default NumberPagesForm;