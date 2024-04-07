import { mongoose, Schema } from "mongoose";

const carSchema = new Schema({
    marca: {
        type: String,
    }, 
    modelo: {
        type: String,
    },
    ano: {
        type: Number,
    },
    vendedor: {
        type: String,
    },
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    
    },
    imagen: {
        type: String,
    },
});

export const Car = mongoose.model("Car", carSchema);