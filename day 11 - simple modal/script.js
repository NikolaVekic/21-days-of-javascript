const modal = document.querySelector(".modal-overlay");
const button = document.querySelector("#button");
const closeWindow = document.querySelector("#close");
const body = document.querySelector("body");

const handleClick = () => {
  modal.classList.remove("hide");
};

const removeModal = () => {
  modal.classList.add("hide");
};

const bodyClose = (e) => {
  if (!modal.contains(e.target) && e.target !== button) {
    removeModal();
  }
};

button.addEventListener("click", handleClick);
closeWindow.addEventListener("click", removeModal);
body.addEventListener("click", bodyClose);
