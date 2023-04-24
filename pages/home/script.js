const btnOpenModalAdd = document.querySelector("#btn-add");
const btnCloseModalAdd = document.querySelector("#btn-close");
const btnConfirmAdd = document.querySelector("#btn-confirm-add");
const btnCancelAdd = document.querySelector("#btn-cancel-add");
const inputNameAdd = document.querySelector("#input-name-add");
const inputEmailAdd = document.querySelector("#input-email-add");
const inputPasswordAdd = document.querySelector("#input-password-add");
const modalAdd = document.querySelector("#modal-add");


const modalDel = document.querySelector("#modal-del");
const btnOpenModalDel = document.querySelectorAll(".btn-del");
const btnCloseModalDel = document.querySelector("#btn-close-del");


btnOpenModalAdd.addEventListener("click", (e) => {
  e.preventDefault();

  modalAdd.style.display = "flex";
});

btnCloseModalAdd.addEventListener("click", (e) => {
  e.preventDefault();

  modalAdd.style.display = "none";
});

btnCancelAdd.addEventListener("click", (e) => {
  e.preventDefault();

  inputNameAdd.value = "";
  inputEmailAdd.value = "";
  inputPasswordAdd.value = "";
});

for (const btn of btnOpenModalDel) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    modalDel.style.display = "flex";
  });
}

btnCloseModalDel.addEventListener("click", (e) => {
  e.preventDefault();

  modalDel.style.display = "none";
})
