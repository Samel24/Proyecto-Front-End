import React, { useState, useEffect } from "react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./card";

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:7000/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  if (loading) {
    return ( 
      <div className="flex flex-wrap justify-center">
        <ReloadIcon className="w-20 h-20  animate-spin flex flex-wrap justify-center" />
      </div>
    );
  }

  if (cars.length === 0) {
    return <div>No existen carros disponibles.</div>;
  }

  return (
    <div id="listado">
      <div className="bg-[#821414] flex flex-wrap justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white py-4">Nuestros carros</h2>
      </div>

      <div className="bg-[#821414] flex flex-wrap justify-center">
        {cars.map((car) => (
          <Card key={car._id} className="max-w-sm m-4 bg-gray-200">
            <img className="rounded-t-xl w-64 h-48 object-cover" src={car.imagen} alt={car.modelo} />
            <CardHeader>
              <CardTitle> {car.marca} {car.modelo}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Año: {car.ano}</CardDescription>
              <CardDescription>Precio: ${car.precio}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarList;