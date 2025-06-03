import React from 'react';

const Experiencia = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Mi Experiencia Personal</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-md aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/Z_BO47COKro?modestbranding=1&rel=0"
            title="Video de experiencia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
