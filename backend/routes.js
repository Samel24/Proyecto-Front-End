import express from "express";
import {
  getCar,
  aggCar,
  //getCarById,
  getCarByQueryParams,
  deleteCar,
  addContactInterest,
  getContactInterest,
} from "./controllers.js";

import { checkSuperAdminArbitrary } from "./securityCheckl.js";

const router = express.Router();

// Cars

/**
 * @openapi
 * /cars:
 *   post:
 *     summary: Agrega un nuevo carro
 *     description: Agrega un nuevo carro a la lista de carros disponibles para alquilar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - marca
 *               - modelo
 *               - ano
 *               - vendedor
 *               - precio
 *               - descripcion
 *               - imagen
 *             properties:
 *               marca:
 *                 type: string
 *               modelo:
 *                 type: string
 *               ano:
 *                 type: number
 *               vendedor:
 *                 type: string
 *               precio:
 *                 type: number
 *               descripcion:
 *                 type: string
 *               imagen:
 *                 type: string
 *             example:
 *               marca: "Toyota"
 *               modelo: "Corolla"
 *               ano: 2020
 *               vendedor: "Concesionario XYZ"
 *               precio: 25000
 *               descripcion: "Toyota Corolla en excelente estado, poco uso, precio negociable."
 *               imagen: "url_to_image"
 *     responses:
 *       201:
 *         description: Carro agregado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Datos de entrada inválidos.
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         marca:
 *           type: string
 *         modelo:
 *           type: string
 *         ano:
 *           type: number
 *         vendedor:
 *           type: string
 *         precio:
 *           type: number
 *         descripcion:
 *           type: string
 *         imagen:
 *           type: string
 */

router.post("/cars", checkSuperAdminArbitrary, aggCar);

/**
 * @openapi
 * /cars:
 *   get:
 *     summary: Obtiene una lista de todos los carros
 *     responses:
 *       200:
 *         description: Una lista de carros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - marca
 *         - modelo
 *         - ano
 *         - vendedor
 *         - precio
 *         - descripcion
 *         - imagen
 *
 *       properties:
 *         marca:
 *           type: string
 *         modelo:
 *           type: string
 *         ano:
 *           type: number
 *         vendedor:
 *           type: string
 *         precio:
 *           type: number
 *         descripcion:
 *           type: string
 *         imagen:
 *           type: string
 */
router.get("/cars", getCar);


router.get('/cars/obtein/', getCarByQueryParams);

//router.get("/cars/details/:id", getCarById);
router.delete("/cars/:id", deleteCar);

// Contacts

/**
 * @openapi
 * paths:
 *   /contacts:
 *     post:
 *       summary: Crea un nuevo contacto
 *       description: Añade un nuevo registro de contacto a la base de datos.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       responses:
 *         201:
 *           description: Contacto creado exitosamente.
 *         400:
 *           description: Error en los datos proporcionados.
 *     get:
 *       summary: Obtiene todos los contactos
 *       description: Devuelve una lista de todos los registros de contactos.
 *       responses:
 *         200:
 *           description: Una lista de contactos.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Contact'
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - correo
 *         - mensaje
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         correo:
 *           type: string
 *           format: email
 *         mensaje:
 *           type: string
 *       example:
 *         nombre: "Jane"
 *         apellido: "Doe"
 *         correo: "jane.doe@example.com"
 *         mensaje: "Estoy interesada en el alquiler de coches."
 */
router.post("/contacts", addContactInterest);
router.get("/contacts", getContactInterest);

export default router;
