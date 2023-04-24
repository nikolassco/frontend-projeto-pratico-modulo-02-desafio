const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const btnCancel = document.querySelector("#btn-cancel");
const btnConfirm = document.querySelector("#btn-confirm");

btnCancel.addEventListener("click", (e) => {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputEmail.value || !inputPassword.value || !inputName.value) {
    console.log("Preencha os campos para continuar.")
    return;
  }

  window.location = "../../index.html";
});
