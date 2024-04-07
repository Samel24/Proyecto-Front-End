import mongoose from 'mongoose';

import { Car } from './carsModel.js'
import { contact } from './contactModel.js';

export const aggCar = async (req, res) => {
    const { marca, modelo, ano, vendedor, precio, descripcion, imagen } = req.body;

    const car = new Car({ marca, modelo, ano, vendedor, precio, descripcion, imagen });
    try {
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getCar = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await Car.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateCar = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, vendedor, precio, descripcion, imagen } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No existe un auto con el id: ${id}`);

    const car = { marca, modelo, ano, vendedor, precio, descripcion, imagen, _id: id };

    await Car.findByIdAndUpdate(id, car, { new: true });

    res.json(car);
}

export const deleteCar = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No existe un auto con el id: ${id}`);

    await Car.deleteOne({ _id: id });

    res.json({ message: "Auto eliminado exitosamente" });
}
export const getCarByQueryParams = async (req, res) => {
    try {
      const { marca } = req.query;
      const query = {};
    
      if (marca) {
        query.marca = marca; 
      }
      
      const cars = await Car.find(query); 
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: "Error al buscar coches", error: error.message });
    }
  };

export const addContactInterest = async (req, res) => {
    const { nombre, apellido, correo, telefono , mensaje } = req.body;

    if(!nombre || !apellido || !correo || !telefono || !mensaje) return res.status(400).json({ message: "Por favor, llena todos los campos" });

    const contactInterest = new contact({ nombre, apellido, correo, telefono, mensaje });
    try {
        await contactInterest.save();
        res.status(201).json(contactInterest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getContactInterest = async (req, res) => {
    try {
        const contacts = await contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}