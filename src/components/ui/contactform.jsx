"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./use-toast";

import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

const formSchema = z.object({
  nombre: z.string().min(3).max(50),
  apellido: z.string().max(50),
  correo: z.string().email(),
  telefono: z.string(),
  mensaje: z.string().min(10).max(500),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:7000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);

    toast({
      title: "Éxito",
      description: "Se ha enviado tu mensaje de contacto correctamente.",
    });
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje.",
        variant: "destructive", 
      });
    }
  };

  return (
    <div id="contacto" className=" bg-gray-200 mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 py-4">
        Contactanos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Form {...form} className="space-y-8">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tu nombre"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tu apellido"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tu correo electrónico"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input
                      as="textarea"
                      placeholder="Tu telefono aquí"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mensaje"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Input
                      as="textarea"
                      placeholder="Tu mensaje aquí"
                      {...field}
                      className="textarea textarea-bordered h-24"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="btn btn-primary py-4 px-4"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Form>
        <div className="hidden md:block">
          <img
            src="https://t4.ftcdn.net/jpg/02/76/92/57/360_F_276925735_EjzKsGYT21SH4t0VzAO8kXr5qi90TMEY.jpg"
            alt="Imagen decorativa"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
