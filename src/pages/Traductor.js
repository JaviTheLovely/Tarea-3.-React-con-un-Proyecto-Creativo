
import React, { useState } from 'react';
import numeroALetras from './utils/numeroALetras';

const Traductor = () => {
  const [numero, setNumero] = useState('');
  const [letras, setLetras] = useState('');

  const traducir = () => {
    const num = parseInt(numero);
    if (num >= 1 && num <= 1000) {
      setLetras(numeroALetras(num));
    } else {
      setLetras('Por favor, ingresa un número entre 1 y 1000.');
    }
  };

  return (
    <div className="container">
      <h1>Traductor de Números a Letras</h1>
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)} placeholder="Número (1-1000)" />
      <button onClick={traducir}>Traducir</button>
      <p>{letras}</p>
    </div>
  );
};

export default Traductor;
