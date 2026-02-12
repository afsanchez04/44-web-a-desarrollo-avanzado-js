import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  age: z.number().int().positive("La edad debe ser un número positivo")
})

const user = {
  name: "pepe",
  age: 17
} 

try {
  schema.parse(user)
  console.log("Datos válidos")
} catch (error) {
  console.error(error)
}


/* 
const user = {
  "nombre": "pepe",
  "correo": "asdsadsdfasd@sdfs",
  "pass": "123134"
} 
  
*/