import zod from "https://cdn.jsdelivr.net/npm/zod@4.3.6/+esm";

const nameSchema = zod.string();
const booleanSchema = zod.boolean();
const undefinedSchema = zod.undefined();
const nullSchema = zod.null();
const arraySchema = zod.array(zod.string());

const mensajeUno = arraySchema.safeParse([1, 2, 3]);
const mensajeDos = arraySchema.safeParse(["1", "2", "3"]);

/* console.log(mensajeUno);
console.log(mensajeDos); */

const name = "Pepe";

nameSchema.parse(name);
booleanSchema.parse(true);

/* const userSchema = zod.object({
  email: zod.string().email(),
  fullname: zod.string().min(1, "Nombre requerido"),
  phone: zod.number(),
}); */

/* try {
  userSchema.parse({
    email: "arturo@correocom",
    fullname: "artuvo cova",
    phone: 12341234213,
  });
  console.log("Datos válidos");
} catch (error) {
  console.error("El error es: ", error);
} */

/* const mensaje = userSchema.parse({
  email: "arturo@correo.com",
  fullname: "artuvo cova",
  phone: 12341234213
})

console.log(mensaje) */

/* const numberSchema = zod.number()

const msj = numberSchema.safeParse("30")

console.log(msj)
console.log(msj.error) */

/* const userSchema = zod.object({
  email: zod.string().email(),
  fullname: zod.string().min(1, "Nombre requerido"),
  phone: zod.number(),
});

const usersSchema = zod.array(userSchema);

usersSchema.parse([
  {
    email: "arturo@correo.com",
    fullname: "artuvo cova",
    phone: 12341234213,
  },
  {
    email: "pepe@correo.com",
    fullname: "Pepe cova",
    phone: 12341234213,
  }
]); */

//Crear el schema
const userSchema = zod.object( {
  name: zod.string().min(1,"Nombre obligatorio"),
  email: zod.string().email({error: "El correo no es válido"}),
  age: zod.number().int().positive("La edad debe ser un número positivo")
} )

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: Number( document.getElementById("age").value )
  }

  //Validar la información con schema creado
  try {
    userSchema.parse(formData)
    alert("Formulario enviado con éxito")
  } catch (error) {
    //const msj = error.map( e => e.message ).join(", ")
    console.log(`Error: ${error} `)
    console.log(`Error: ${error.message} `) //Pendiente mostrar mensaje de error personalizado
  }

})  
