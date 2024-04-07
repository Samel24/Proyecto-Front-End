import React, { useState } from "react";
import { Button } from "./button";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./dialog";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white">
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogTrigger asChild>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Menu</DialogTitle>
          <DialogClose asChild>
            <button className="absolute top-3 right-2" onClick={handleCloseMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogClose>
          <div className="flex flex-col items-start">
            <a href="#busqueda" className="py-2" onClick={handleCloseMenu}>
              Home - Búsqueda
            </a>
            <a href="#soporte" className="py-2" onClick={handleCloseMenu}>
              Soporte
            </a>
            <a href="#listado" className="py-2" onClick={handleCloseMenu}>
              Listado
            </a>
            <a href="#contacto" className="py-2" onClick={handleCloseMenu}>
              Contacto
            </a>
          </div>
          <Button className="mt-4 bg-blue-600 text-white rounded w-32">
            Iniciar
          </Button>
        </DialogContent>
      </Dialog>
      <div className="hidden sm:flex space-x-4">
      <a href="#busqueda" className="text-black px-4 hover:text-red-600">
          Home - Búsqueda
        </a>
        <a href="#pasos" className="text-black px-4 hover:text-red-600">
          Pasos
        </a>
        <a href="#soporte" className="text-black px-4 hover:text-red-600">
          Soporte
        </a>
        <a href="#listado" className="text-black px-4 hover:text-red-600">
          Listado
        </a>
        <a href="#contacto" className="text-black px-4 hover:text-red-600">
          Contacto
        </a>
      </div>
      <div className="hidden sm:flex space-x-4">
        <Button className="bg-white-200 text-black border border-white rounded w-32">
          Regístrate
        </Button>
        <Button className="bg-blue-600 text-white rounded w-32">Iniciar</Button>
      </div>
    </nav>
  );
};

export default NavBar;
