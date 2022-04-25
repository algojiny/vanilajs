const loginForm = document.getElementById("loginForm");
const inputId = document.querySelector(".input_id");
const inputPassword = document.querySelector(".input_password");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.peventDefault();
  console.log(event);
}

export default login;
