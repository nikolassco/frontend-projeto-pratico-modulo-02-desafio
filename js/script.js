const form = document.querySelector("form");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const btnSubmit = document.querySelector("#btn-submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputEmail.value || !inputPassword.value) {
    console.log("Preencha os campos para continuar.")
    return;
  }

  window.location = "../pages/home/index.html";
});
