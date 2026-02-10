const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorEmail = document.getElementById("errorEmail");

  if (!email.includes("@")) {
    errorEmail.textContent = "Introduce un correo electrónico válido";
    errorEmail.style.color = "yellow";

    return;
  }

  const userData = {
    name,
    email,
    password,
  }

  errorEmail.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then( response => response.json() )
  .then( data => console.log(data) )
  .catch ( error => console.error("Error:",error) )

  form.reset()

  console.log(userData);
});
