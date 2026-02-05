//Ejemplo 1 promesas: tienda de hamburguesas

/* let tiendaAbierta = true;

let pedido = (tiempo, proceso) => {
  return new Promise((resolve, reject) => {
    if (tiendaAbierta) {
      //Ejecutar la función del proceso

      setTimeout(() => {
        resolve(proceso());
      }, tiempo);
    } else {
      reject(console.log("Tienda cerrada"));
    }
  });
};

pedido( 3000, () => console.log("Ingredientes reunidos correctamente") )
.then( () => {
  return pedido( 2000, () => console.log("Carne cocinada") )
} )
.then( () => {
  return pedido( 1000, () => console.log("El pan ya está tostado") )
} )
.then( () => {
  return pedido( 3000, () => console.log("Hamburguesa armada") )
} )
.then( () => {
  return pedido( 2000, () => console.log("Tu pedido está listo para llevar") )
} )
.catch( () => {
  console.log("El cliente se ha ido")
} )
.finally( () => {
  console.log("Jornada finalizada. La tienda ha cerrado")
} ) */

//Ejemplo 2 promesas: Registro de usuarios

//Creación de funciones
/* function registrarUsuario( nombre ){
  return new Promise( (resolve, reject) => {

    setTimeout( () => {

      if(nombre){
        resolve( `El usuario ${nombre} se registró correctamente` )
      }else{
        reject("El nombre de usuario el obligatorio")
      }

    }, 1500 )

  } )
} */

/* function enviarCorreoBienvenida( nombre ){

  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve( `Correo de bienvenida enviado a ${nombre}` )
    }, 3500 )
  } )

} */

//Manejo del formulario

/* const form = document.getElementById("registroForm")
const mensaje = document.getElementById("mensaje")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const usuario = document.getElementById("usuario").value
  const password = document.getElementById("password").value

  if( !usuario || !password ){
    mensaje.textContent = "Todos los campos son obligatorios" 
    mensaje.style.color = "red"
    return
  }

  //Encadenamiento de promesas
  registrarUsuario( usuario )
  .then( result => {
    mensaje.textContent = result
    mensaje.style.color = "green"
    return enviarCorreoBienvenida(usuario)
  } ) 
  .then( result => {
    alert(result)
  })
  .catch( error => {
    mensaje.textContent = error
    mensaje.style.color = "red"
  } )


}) */

//Ejemplo chef hamburguesas async await

/* let isOpen = true;

let eleccion_salsas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Qué salsas quieres?"));
    }, 4000);
  });
};

let cocina = async () => {

  console.log("A")
  console.log("B")
  console.log("C")

  await eleccion_salsas()

  console.log("D")
  console.log("E")

}

cocina()

console.log("Lavando platos")
console.log("Limpiando las mesas")
console.log("Registro de nuevas órdenes") */

//Alnálisis proyecto de clase

const mesasDisponibles = 5; // Número de mesas disponibles para reservar

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa,
      // de lo contrario, recházala con un mensaje adecuado.
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(
          `Corfimada la reserva de la cantida de mesas ${mesasSolicitadas}`,
        );
      } else {
        reject(
          `No es posible reservar las cantidad de messas ${mesasSolicitadas}`,
        );
      }
    }, 2000);
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
      // para simular si el correo se envió correctamente o si ocurrió un error.

      let enviado = Math.round( Math.random() )

      if(enviado){
        resolve(`Correo enviado satisfactoriamente a ${nombreCliente}`)
      }else{
        reject("No se envió el correo")
      }
    }, 1500);  
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    
    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    if("..."){

    }
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas
