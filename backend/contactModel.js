import { mongoose, Schema } from "mongoose";

const contactSchema = new Schema({
    nombre: {
        type: String,
    }, 
    apellido: {
        type: String,
    },
    correo: {
        type: String,
    },
    telefono: {
        type: Number,
    },
    mensaje: {
        type: String,
    }
});

export const contact = mongoose.model("contact", contactSchema);