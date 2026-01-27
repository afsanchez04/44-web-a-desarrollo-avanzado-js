//console.log("Event Loop Asincronicidad")

/* function multiplicar (x, y) {
  return x * y
}

function imprimirCuadrado (x){
  let c = multiplicar(x,x)
  console.log(c)
}

imprimirCuadrado(5) */

/* 
function foo () {
  foo()
}

foo() */


/* console.log("Hola")

setTimeout( () => {console.log("mundo")}, 3000 )

console.log("fresa","mango","banano") */


//Callbacks
/* function saludar (nombre, callback) {
  console.log(`Hola, ${nombre}`)
  callback()
}

saludar("Maria", () => {
  console.log("Callback ejecutado")
}) */

//Promises
/* const promesa = new Promise( (resolve, reject) => {
  setTimeout( () => {resolve("Promesa cumplida")}, 2000 )
} )

promesa.then( resultado => console.log(resultado)) */

//Async Await
/* async function obtederDatos () {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await respuesta.json()
  return data
}

const uso = await obtederDatos ()

console.log(uso) */


/* console.log("Inicio")

setTimeout( () => {
  console.log("Macrotarea - setTimeout")
}, 0 )

Promise.resolve().then( ( () => {
  console.log("Microtarea - Promesa")
} ) )

console.log("Fin") */

const hacerPedido = async (pedido, tiempo) => {
    console.log(`Pedido de ${pedido}`);

    await new Promise( (resolve) => {
        setTimeout(() => {
            resolve();
        }, tiempo);
    }); 

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    console.log(`Pedido de ${pedido} listo`);
}

hacerPedido("Pizza", 5000);
hacerPedido("Hamburguesa", 2500);
hacerPedido("Ensalada", 1000);