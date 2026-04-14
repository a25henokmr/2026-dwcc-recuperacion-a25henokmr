'use strict';

const producto = document.querySelector('#productInput');
const cantidad = document.querySelector('#amountInput');
const lista = document.querySelector('#shoppingList');
const anadir = document.querySelector('#addBtn');
const pendientes = document.querySelector('#pendingCount');
const comprados = document.querySelector('#boughtCount');

anadir.addEventListener('click', () => {
  if (producto.value == '') {
    alert('No se puede añadir un producto vacio');
  } else {
    const li = document.createElement('li');
    li.classList.add('item-info');
    li.textContent = producto.value;
    li.classList.add('li');
    lista.appendChild(li);
    producto.value = '';

    const spanInfo = document.createElement('span');

    spanInfo.textContent = cantidad.value;
    li.appendChild(spanInfo);
    cantidad.value = 1;
  }
});
