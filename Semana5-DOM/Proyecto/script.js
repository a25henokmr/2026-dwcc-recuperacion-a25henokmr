'use strict';

// Seleccionamos los elementos que vamos a usar
const lista = document.querySelector('#taskList');
const btnAnadir = document.querySelector('#addBtn');
const input = document.querySelector('#taskInput');
const taskCounter = document.querySelector('#taskCounter');
let tareasPendientes = 0;

// Boton para añadir tareas
btnAnadir.addEventListener('click', () => {
  tareasPendientes++;
  //Creamos el li
  const li = document.createElement('li');

  // Creamos el span
  const span = document.createElement('span');
  span.textContent = input.value;
  span.classList.add('task-text');

  // Creamos el boton de eliminar
  const btnDelet = document.createElement('button');
  btnDelet.textContent = 'Eliminar';
  btnDelet.classList.add('delete-btn');

  // Le añadimos el span y el boton dal li
  li.appendChild(span);
  li.appendChild(btnDelet);

  lista.appendChild(li);

  // Cambiamos el numero de tareas pendientes y actualizamos el input
  input.value = '';
  taskCounter.textContent = `${tareasPendientes} tareas pendientes`;
  btnDelet.addEventListener('click', () => {
    // 1. Eliminamos el li completo
    li.remove();

    // 2. Restamos una tarea al contador
    tareasPendientes--;

    // 3. Actualizamos el texto del contador en el HTML
    taskCounter.textContent = `${tareasPendientes} tareas pendientes`;
  });
});
