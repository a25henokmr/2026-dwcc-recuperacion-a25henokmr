'use strict';

// 2.1 Strings: métodos esenciales

const cadea = 'desenvolvemento web en contorno cliente';

// a) Convierte la primera letra a mayúscula

const a = cadea.charAt(0).toUpperCase() + cadea.slice(1);
console.log(a);

// b) Cuenta cuántas veces aparece la letra 'e'

function vecesE(cadea) {
  let contador = 0;
  for (let i = 0; i <= cadea.length; i++) {
    if (cadea.charAt(i) == 'e') {
      contador++;
    }
  }

  return contador;
}

console.log(vecesE(cadea));

// c) Divide la cadena en un array de palabras

const palabras = cadea.split(' ');

console.log(palabras);

// d) Obtén las palabras que tengan más de 5 caracteres

function cincoCaracteres(palabras) {
  const palabras5mas = [];
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length >= 5) {
      palabras5mas.push(palabras[i]);
    }
  }

  return palabras5mas;
}

console.log(cincoCaracteres(palabras));

// e) Reemplaza 'cliente' por 'servidor'

const cadea2 = cadea.replace('cliente', 'servidor');

console.log(cadea2);

// f) Comprueba si la cadena empieza por 'des'

const empiezaDes = cadea.substring(0, 3) == 'des';

console.log(empiezaDes);
