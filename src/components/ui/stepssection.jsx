import React from 'react';

const StepRedBackgroundSection = () => {
  const logoHeight = '12rem';

  return (
    <div id="pasos" className="bg-[#821414] text-white text-center p-8">
      {/* Utiliza las clases de Tailwind para controlar la visibilidad en lugar de window.innerWidth */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center hidden md:grid">
        <img src="/toyota.png" alt="Toyota" style={{ height: logoHeight }} />
        <img src="/audi.png" alt="Audi" style={{ height: '15rem' }} className="mt-[-5rem]" />
        <img src="/chevro.png" alt="Chevrolet" style={{ height: '15rem' }} className="mt-[1.8rem]" />
        <img src="/renault.png" alt="Renault" style={{ height: logoHeight }} />
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-4">Sigue estos 3 pasos para rentar tu vehículo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white text-[#821414] p-4 rounded shadow-md">
          <p className="font-semibold">Busca</p>
        </div>
        <div className="bg-white text-[#821414] p-4 rounded shadow-md">
          <p className="font-semibold">Escoge</p>
        </div>
        <div className="bg-white text-[#821414] p-4 rounded shadow-md">
          <p className="font-semibold">Reserva</p>
        </div>
      </div>
    </div>
  );
};

export default StepRedBackgroundSection;