import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Dialog, DialogContent, DialogTitle } from "./dialog";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Para controlar la visibilidad del diálogo

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/cars/obtein/?marca=${encodeURIComponent(
          searchTerm
        )}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const fetchedCars = await response.json();
      console.log(fetchedCars); 
      setCars(fetchedCars); 
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error durante la búsqueda:", error);
    }
  };

  return (
    <div className="mt-4 md:mt-6 w-full max-w-lg mx-auto">
      <div className="flex items-center space-x-2 shadow-lg">
        <Input
          type="text"
          placeholder="Renta tu vehículo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-3 text-lg font-light border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200 ease-in-out"
        />
        <Button
          onClick={handleSearch}
          className="bg-red-500 text-white text-lg px-8 py-3 rounded-r-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition duration-200 ease-in-out"
        >
          Busca
        </Button>

        {isDialogOpen && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogTitle>Resultados de la Búsqueda</DialogTitle>
              <div>
                {/* Iterar sobre los coches para mostrar sus datos */}
                {cars.map((car, index) => (
                  <div key={index} className="my-2">
                    <p>Marca: {car.marca}</p>
                    <p>Modelo: {car.modelo}</p>
                    <p>Descripcion: {car.descripcion}</p>
                    <p>Precio: {car.precio}</p>
                  </div>
                ))}
              </div>
              <Button onClick={() => setIsDialogOpen(false)}>Cerrar</Button>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default SearchBar;