import React from "react";

const BestServicesSection = () => {
  return (
    <section id="soporte" className="py-8 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Experimenta la mejor sensación con nuestras ofertas de alquiler
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta de servicio: Ubicación Inmediata */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl text-red-500 mb-4">
              <img
                src="/address-icon.svg"
                alt="Direccion"
                className="h-20 mx-auto" // Ajustar el tamaño de la imagen y centrarla
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Ubicación Inmediata</h3>
            <p className="text-gray-600">
              Encontramos el alquiler cerca de ti o en tu destino.
            </p>
          </div>

          {/* Tarjeta de servicio: Fecha de recogida */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl text-red-500 mb-4">
              <img
                src="/parking-point-icon.svg"
                alt="Carro"
                className="h-20 mx-auto" // Ajustar el tamaño de la imagen y centrarla
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Fecha de recogida</h3>
            <p className="text-gray-600">
              Selecciona el momento perfecto para comenzar tu viaje.
            </p>
          </div>

          {/* Tarjeta de servicio: Reserva tu auto */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl text-red-500 mb-4">
              <img
                src="/hover-click-icon.svg"
                alt="Direccion"
                className="h-20 mx-auto" // Ajustar el tamaño de la imagen y centrarla
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Reserva tu auto</h3>
            <p className="text-gray-600">
              Reserva el auto que se ajuste a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestServicesSection;