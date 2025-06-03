
import React, { useState } from 'react';

const Tabla = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      const resultado = [];
      for (let i = 1; i <= 12; i++) {
        resultado.push(`${num} x ${i} = ${num * i}`);
      }
      setTabla(resultado);
    }
  };

  return (
    <div className="container">
      <h1>Tabla de Multiplicar</h1>
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)} placeholder="Número" />
      <button onClick={generarTabla}>Generar</button>
      <ul>
        {tabla.map((linea, index) => (
          <li key={index}>{linea}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tabla;
