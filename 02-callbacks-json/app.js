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

let suma = (n1, n2) => {
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
} ) )
