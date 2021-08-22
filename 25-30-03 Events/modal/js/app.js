document.addEventListener("DOMContentLoaded", () => {
  const modalWindow = document.querySelector(".modal-wrapper");

  const modalLink = document.querySelector(".open-modal");
  modalLink.addEventListener("click", (event) => {
    event.preventDefault();
    modalWindow.classList.add("modal-show");
  });

  document.querySelector(".close-me").addEventListener("click", () => {
    modalWindow.classList.remove("modal-show"); //w/o a variable
  });
});
