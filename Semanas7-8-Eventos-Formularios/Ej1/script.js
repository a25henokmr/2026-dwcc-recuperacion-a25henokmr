'use strict';

const boton = document.querySelector('#mainButton');
const salida = document.querySelector('#output');

boton.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  salida.innerHTML = `Las cooredenadas son x=${x} y=${y}`;
});

document.addEventListener('keydown', (e) => {
  const tecla = e.key;
  salida.innerHTML = `La tecla es ${tecla}`;
});

salida.addEventListener('mouseenter', () => {
  salida.style.backgroundColor = 'black';
  salida.style.color = 'white';
});

salida.addEventListener('mouseleave', () => {
  salida.style.backgroundColor = 'white';
  salida.style.color = 'gray';
});
