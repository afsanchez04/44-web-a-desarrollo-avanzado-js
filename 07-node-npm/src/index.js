
import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/data', (req, res) => {
  res.send({
    nombre: "rick",
    age: 60
  })
})

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})

/* import http from "node:http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end("Hola mundo desde Node.js")
} )

server.listen(port, hostname, () => {
  console.log(`Servidor ejecutandose en: http://${hostname}:${port}`) //http://127.0.0.1:3000
}) */


//Ejemplo de zod con node
/* import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  age: z.number().int().positive("La edad tiene que ser número positivo")
})

try {
  schema.parse({name: "Pedro", age: 23})
  console.log("Datos válidos")
} catch (error) {
  console.error(error)
} */



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