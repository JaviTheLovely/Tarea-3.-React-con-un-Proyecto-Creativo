
import React, { useState } from 'react';

const Sumadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(Number(num1) + Number(num2));
  };

  return (
    <div className="container">
      <h1>Sumadora</h1>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="Número 1" />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Número 2" />
      <button onClick={sumar}>Sumar</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default Sumadora;
