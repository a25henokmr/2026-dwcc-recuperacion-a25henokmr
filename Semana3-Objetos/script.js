'use strict';

/**
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

// 2.2 Función reverseString

// Crea una función reverseString(str) que devuelva la cadena invertida. Impleméntala de dos formas:  

// Usando split, reverse y join.

const str = 'javascript';

function reverseString1(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString1(str));

// Usando un bucle for.

function reverseString2(str) {
  let cadenaInv = '';

  for (let i = str.length; i >= 0; i--) {
    cadenaInv += str.charAt(i);
  }

  return cadenaInv;
}

console.log(reverseString2(str));


// 2.3 Template literals

// Usa template literals (backticks) para crear una función createCard(name, age, city) que devuelva un string HTML como:

const name = 'Ana';
const age = 25;
const city = 'Santiago';

function createCard(name, age, city) {
  const card = `<div class="card">
    <h2>${name}</h2>
    <p>Edad: ${age} años</p>
    <p>Ciudad: ${city}</p>
</div>`;

  return card;
}

console.log(createCard(name, age, city));



// 2.4 Números y Math

// randomInt(min, max): devuelve un entero aleatorio entre min y max (ambos incluidos).
const min = 1;
const max = 10;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(min, max));

// roundToDecimals(num, decimals): redondea un número a n decimales.

const num = 5.2314;
const decimals = 2;

function roundToDecimals(num, decimals) {
  const factor = Math.pow(10, decimals);

  return Math.round(num * factor) / factor;
}

console.log(roundToDecimals(num, decimals));

// hypotenuse(a, b): calcula la hipotenusa de un triángulo rectángulo.

const a = 4
const b = 8

function hipotenusa(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(hipotenusa(a,b))



// 2.5 Objetos: creación y acceso

// Crea un objeto student con las propiedades: name, age, grades (array de números), y los métodos:

const student = {
  name: 'Ada',
  age: 22,
  grades: [7, 5, 8, 6, 9],
  // getAverage(): devuelve la media de las notas.
  getAverage() {
    const sum = this.grades.reduce((acc, val) => acc + val, 0);

    return sum / this.grades.length;
  },

  // getHighest(): devuelve la nota más alta.
  getHighest() {
    return Math.max(...this.grades);
  },

  //isPassing(): devuelve true si la media es >= 5.
  isPassing() {
    if (this.getAverage() >= 5) {
      return true;
    } else {
      return false;
    }
  },

  //addGrade(grade): añade una nota al array.
  addGrade(grade) {
    this.grades.push(grade);
  },
};

console.log(student.getAverage());
console.log(student.getHighest());
console.log(student.isPassing());
student.addGrade(4);
console.log(student.grades);



// 2.6 Desestructuración y spread

// a) Extrae name y age en variables separadas
const person = { name: 'Carlos', age: 30, city: 'Vigo' };

const name = person.name;
const age = person.age;

// b) Usa renombrado para extraer 'name' como 'nombre'

const nombre = person.name;

// c) Usa valores por defecto para una propiedad que no existe

const { pais = 'España' } = person;

// d) Desestructura este array
const colors = ['rojo', 'verde', 'azul', 'amarillo'];

// Obtén el primero y el tercero, ignora el segundo

const [primero, , tercero] = colors;

// e) Usa spread para crear una copia del objeto person
//    y añadir la propiedad email

const copia = { ...person, email: 'henok@gmail.com' };

// f) Usa spread para fusionar dos arrays

const masColors = ['negro', 'blanco'];
const todosLosColores = [...colors, ...masColors];



// 2.7 Arrays: métodos esenciales

const products = [
  { name: 'Laptop', price: 999, category: 'electronics' },
  { name: 'Book', price: 15, category: 'education' },
  { name: 'Phone', price: 699, category: 'electronics' },
  { name: 'Pen', price: 2, category: 'office' },
  { name: 'Tablet', price: 450, category: 'electronics' },
  { name: 'Notebook', price: 5, category: 'office' },
];

// a) Encuentra el producto más caro (sin filter/map/reduce)
const masCaro = products[0];
for (const p of products) {
  if (p.price > masCaro.price) {
    masCaro = p;
  }
}

console.log(masCaro);

// b) Comprueba si todos los productos cuestan más de 1€
const mas1Euro = products.every((p) => p.price > 1);
console.log(mas1Euro);

// c) Comprueba si algún producto pertenece a 'education'
const hayEducacion = products.some((p) => p.category === 'education');
console.log(hayEducacion);

// d) Encuentra el primer producto de menos de 10€
const barato = products.find((p) => p.price < 10);
console.log(barato);

// e) Obtén un array solo con los nombres de los productos
const names = products.map((p) => p.name);
console.log(names);

// f) Obtén la suma total de todos los precios
const total = products.reduce((acc, p) => acc + p.price, 0);
console.log(total);

// g) Agrupa los productos por categoría en un objeto
const agrupados = products.reduce((acc, p) => {
  acc[p.category] = acc[p.category] || [];
  acc[p.category].push(p);
  return acc;
}, {});
console.log(agrupados);

*/
