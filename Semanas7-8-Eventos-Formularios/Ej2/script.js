'use strict';

// Crea un enlace <a href="https://google.com"> y evita la navegación con preventDefault(). Muestra un alert en su lugar.
/**
const a = document.querySelector('a');

a.addEventListener('click', (e) => {
  e.preventDefault();
  alert('No se puede navegar en este momento');
});
 */
// Crea un formulario y evita el envío por defecto. En su lugar, muestra los datos en consola.

const formulario = document.querySelector('#userForm');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const role = document.querySelector('#role').value;
  console.log(nombre);
  console.log(email);
  console.log(role);
});
