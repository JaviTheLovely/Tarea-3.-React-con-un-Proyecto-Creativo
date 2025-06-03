import React from 'react';


const Inicio = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Datos Personales</h1>
      <img
        src="/images/foto2x2.png"
        alt="Foto 2x2"
        className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-blue-500 mb-4"
      />
      <p><strong>Nombre:</strong> Luis</p>
      <p><strong>Apellido:</strong> Espinal</p>
      <p><strong>Correo:</strong> luisjavierespinal23@email.com</p>
      
    </div>
  );
};

export default Inicio;