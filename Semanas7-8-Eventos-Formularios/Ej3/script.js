'use strict';

const nombre = document.querySelector('#username');
const nameErr = document.querySelector('#nameError');
const botonEnviar = document.querySelector('#submitBtn');

nombre.addEventListener('input', () => {
  if (nombre.value.trim().length < 3) {
    nameErr.textContent = 'El nombre debe tener al menos 3 caracteres';
    nombre.classList.remove('invalid');
    botonEnviar.disabled = true;
  } else {
    nameErr.textContent = '';
    nombre.classList.remove('invalid');
    botonEnviar.disabled = false;
  }
});
