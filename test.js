let openModal = document.querySelector('#openModal');
let modal = document.querySelector('#modal');
let section = document.querySelector('#box');
let text = document.createElement('p');
text.textContent = "Ceci est dans le modal";

openModal.addEventListener('click', () => {
  modal.append(text);


  modal.showModal();
})