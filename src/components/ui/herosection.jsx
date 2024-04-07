import React from "react";
import SearchBar from "./searchbar";

const HeroSection = () => {
  return (
    <div id="busqueda" className="bg-gray-200 md:p-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="space-y-4 md:col-span-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            ¿Buscas un carro para rentar?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black-600">
            Renta un vehículo con los mejores. ¡Somos tu mejor opción!
          </p>
          <SearchBar />
        </div>
        <div className="md:col-span-1 flex justify-end">
          <img
            src="/carro.svg"
            alt="Carro en la ciudad"
            className="relative right-0 top-0 w-full h-auto object-right" 
            style={{ maxWidth: '100%', maxHeight: '100%' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

