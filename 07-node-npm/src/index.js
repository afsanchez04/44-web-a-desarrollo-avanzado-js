
//Ejemplo de zod con node
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  age: z.number().int().positive("La edad tiene que ser número positivo")
})

try {
  schema.parse({name: "Pedro", age: 23})
  console.log("Datos válidos")
} catch (error) {
  console.error(error)
}



/* import {mostrarTitulo, mostrarMensaje, saludo} from "./tareas.js"
import { user } from "./objetos.js"

console.log(mostrarTitulo())
console.log(saludo("Horacio"))
console.log(user.especialidad) */



//Desestructurar un objeto con require()
/* const {mostrarTitulo, mostrarMensaje} = require("./tareas")

console.log(mostrarTitulo())
console.log(mostrarMensaje()) */

//Importación con require()
/* const tareas = require("./tareas")
const objetos = require("./objetos")

console.log(tareas.mostrarTitulo())
console.log(tareas.mostrarMensaje())
console.log(objetos.user.especialidad) */