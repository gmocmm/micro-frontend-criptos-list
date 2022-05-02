import React, { useState } from 'react'
import { getCriptos } from '../../services/criptos-service';
import Cripto from './Cripto';

const Criptos = () => {
  const [criptos, setCriptos] = useState(null);

  const obtenerCriptos = async () => {
    const auxCriptos = await getCriptos();
    setCriptos(auxCriptos);
    
  };
console.log('kjkjkjk');
  return (
    <div>
      <button onClick={obtenerCriptos}>Lista de criptos</button>
      {criptos && criptos.map((cripto) => <Cripto props={cripto}/>) }
    </div>
  );
};

export default Criptos;
