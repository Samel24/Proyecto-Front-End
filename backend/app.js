import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import router from './routes.js'
import { initMongodb } from './initMongodb.js'

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Mi API de Alquiler de Carros',
        version: '1.0.0',
        description: 'Una API simple para alquilar carros',
      },
      servers: [
        {
          url: 'http://localhost:7000',
          description: 'Servidor de desarrollo',
        },
      ],
    },
    apis: ['./routes.js'],
  };

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const app = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', router)

app.listen(port, () => console.log(`Server is running on port ${port}`))

initMongodb()