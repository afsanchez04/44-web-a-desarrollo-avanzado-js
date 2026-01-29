//Callbacks

//Ejemplo 1
/* const saludar = (nombre, callback) => {
  console.log(`Hola ${nombre}`)
  callback()
}

const despedirse = () => {
  console.log(`Adios`)
}

saludar("Mario", despedirse ) */

//Ejemplo 2

/* let suma = (n1, n2) => {
  return n1 + n2
}

let resta = (n1, n2) => {
  return n1 - n2
}

let multiplicar = (n1, n2) => {
  return n1 * n2
}

let calcular = (n1, n2, callback) => {
  return callback(n1, n2)
}

console.log( calcular( 2, 5, suma ) )
console.log( calcular( 2, 3, resta ) )
console.log( calcular( 2, 3, multiplicar ) )
console.log( calcular( 4, 2, (a,b) => {
  return `No hago operaciones pero tus números fueron ${a} y ${b}`
} ) ) */


//Callback asíncrono

/* console.log("Inicio de la ejecución")

setTimeout( () => {
  console.log("Esto se ejecutará dentro de 2 segundos")
} , 2000 )

console.log("Fin de la ejecución") */


//Ejemplo de callback hell

/* setTimeout(() => {
  console.log("Primera tarea completada")
  setTimeout(() => {
    console.log("Segunda tarea completada")
    setTimeout(() => {
      console.log("Tercera tarea completada")
    }, 1000)
  }, 1000)
}, 1000) */

//Solucionar callback hell con promesas

function tarea (ms, mensaje){
  return new Promise ( (resolve) => {
    setTimeout( () => {
      console.log(mensaje)
      resolve()
    }, ms )
  } )
}

/* tarea(2000, "El agua hirvió")
  .then( () => tarea(3000, "Café mezclado con el agua, infusionando...") )
  .then( () => tarea(2000, "Café listo para servir") )
  .then( () => tarea(2000, "Ya lo puedes tomar") ) */

//Con async await
/* async function ejecutarTareas () {
  await tarea(2000, "El agua hirvió")
  await tarea(3000, "Café mezclado con el agua, infusionando...")
  await tarea(2000, "Café listo para servir")
  await tarea(3000, "Ya lo puedes tomar")
}

ejecutarTareas () */

//Ejemplo final con API

/* async function obtenerNaves () {
  const results = await fetch("https://swapi.dev/api/planets")
  const data = await results.json()
  console.log(data)
  return data.results
}

obtenerNaves ()

async function mostrarInfo () {
  const naves = await obtenerNaves()

  naves.map( ship => {
    console.log(`Nombre: ${ship.name}, Órbita: ${ship.gravity} `)
  } )
} */

//mostrarInfo ()


const jsonData = '{"titulo": "Star Wars I","year": 1980,"director": ["pepe","carlos"]}'

const objeto = JSON.parse(jsonData) //Parsear a javascript información que llega en formato json

console.log( objeto.titulo )
console.log( objeto.year )

//Enviar información al localstorage

localStorage.setItem( "peliculaVista", JSON.stringify( objeto ) )

