const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorEmail = document.getElementById("errorEmail");
  const selectColors = document.getElementsByName("colores");
  const specialCharRegex2 = /[^\w\s]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  /*   const userColors =  Array.from(selectColors).map( color => {
    if(color.checked){
      return color.value 
    }
  } )  */

  /* const userColors =  Array.from(selectColors).filter( color => color.checked === true ) */

  const userColors = [];

  selectColors.forEach((color) => {
    //console.log(color.value, color.checked)
    if (color.checked) {
      userColors.push(color.value);
    }
  });

  if (!name || !email || !password) {
    errorEmail.textContent = "Please fill in all fields.";
    errorEmail.style.color = "orange";
    return;
  }

  if (!email.includes("@")) {
    errorEmail.textContent = "Introduce un correo electrónico válido";
    errorEmail.style.color = "yellow";

    return;
  }

  //Añadir una nueva condición donde se valide contraseña
  if (!(password.length >= 5 && specialCharRegex.test(password))) {
    errorEmail.textContent = "Introduce una contraseña válida";
    errorEmail.style.color = "yellow";
    return;
  }

  const userData = {
    name,
    email,
    password,
    colores: userColors,
  };

  errorEmail.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  form.reset();

  console.log(userData);
});
