'use strict';

/** 
// 4.1 Acceso a nodos

// a) Selecciona el h1 por id, clase y tagName
const id = document.querySelector('#app').firstElementChild;
console.log(id);

const clase = document.querySelector('.title');
console.log(clase);

const tagName = document.getElementsByTagName('h1');
console.log(tagName);

// b) Selecciona todos los li con querySelectorAll
const li = document.querySelectorAll('li');
console.log(li);

// c) Selecciona el li con clase 'active'
const liActive = document.querySelectorAll('li.active');
console.log(liActive);

// d) ¿Qué diferencia hay entre NodeList y HTMLCollection?

// NodeList es estática (no se actualiza si cambia el DOM) y se puede iterar con forEach. HTMLCollection es "viva" (se actualiza automáticamente) y NO tiene forEach.

// e) Accede al texto del elemento strong
const strong = document.querySelector('strong');
console.log(strong.textContent);


// 4.2 Recorrido del DOM

// Desde el ul, accede al primer hijo y al último hijo (element).

const ul1 = document.querySelector('ul').firstElementChild.textContent;
console.log(ul1);

const ul3 = document.querySelector('ul').lastElementChild.textContent;
console.log(ul3);

// Desde el segundo li, accede al anterior y al siguiente hermano.
const li2 = document.querySelector('li.active');
const hermanoAnter = li2.previousElementSibling.textContent;
console.log(hermanoAnter);

const hermanoSig = li2.nextElementSibling.textContent;
console.log(hermanoSig);

// Desde el strong, accede al padre y al abuelo.
const strong = document.querySelector('strong');

const padre = strong.parentElement;
console.log(padre);

const abuelo = strong.parentElement.parentElement;
console.log(abuelo);

// Obtén el número de hijos del ul con children.length y childNodes.length. ¿Por qué son diferentes?

const numHijChil = document.querySelector('ul').children.length;
console.log(numHijChil);

const numHijNod = document.querySelector('ul').childNodes.length;
console.log(numHijNod);



// 4.3 Crear y eliminar elementos

// Cree un nuevo <li> con el texto "Elemento 4" y lo añada al final de la lista.

const li4 = document.createElement('li');
li4.textContent = 'Elemento 4';

const ul = document.querySelector('ul');
ul.appendChild(li4);

const li0 = document.createElement('li');
li0.textContent = 'Elemento 0';

ul.prepend(li0);

// Elimine el <li> con clase active.
document.querySelector('li.active').remove();

// Clone la lista ul completa y la añada después del párrafo.
const ulClon = ul.cloneNode(true);

document.querySelector('#app').appendChild(ulClon);


// 4.4 innerHTML vs createElement

// Crea una tabla HTML con datos de productos usando dos métodos:

const products = [
  { name: 'Laptop', price: 999, stock: 5 },
  { name: 'Mouse', price: 25, stock: 50 },
  { name: 'Monitor', price: 350, stock: 12 },
];

// Genera una tabla con columnas: Nombre, Precio, Stock

// Con innerHTML: genera el HTML como string.

const body = document.querySelector('body');

// Creamos la estructura completa en un solo paso
body.innerHTML += `
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody id="cuerpo-tabla">
      
    </tbody>
  </table>
`;

// Con createElement: crea cada elemento programáticamente.
// 1. Estructura base
const tabla = document.createElement('table');
const thead = document.createElement('thead');
const filaHeader = document.createElement('tr');

// 2. Encabezados (th)
const campos = ['Nombre', 'Precio', 'Stock'];

campos.forEach((texto) => {
  const th = document.createElement('th');
  th.textContent = texto;
  filaHeader.appendChild(th); // Metemos cada th en la fila
});

// 3. Montamos las piezas
thead.appendChild(filaHeader); // Fila al encabezado
tabla.appendChild(thead); // Encabezado a la tabla

// 4. Lo añadimos al documento
document.body.appendChild(tabla);



// 4.5 Estilos y clases

// a) Cambia el color de fondo del h1 a azul usando style
const h1 = document.querySelector('h1');
h1.style.backgroundColor = 'blue';

// b) Añade la clase 'highlighted' al primer li
const li1 = document.querySelector('li');
li1.classList.add('highlighted');

// c) Alterna (toggle) la clase 'active' en todos los li

// d) Comprueba si el segundo li tiene la clase 'active'

console.log(
  document
    .querySelector('ul')
    .firstElementChild.nextElementSibling.classList.contains('active'),
);

// e) Modifica los estilos del párrafo:
//    color rojo, tamaño de fuente 20px, negrita

const p = document.querySelector('p');

p.style.color = 'red';

// f) Lee el estilo computado del h1 (getComputedStyle)

*/
