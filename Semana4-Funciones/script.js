'use strict';

/**

// 3.1 Tipos de funciones

// Implementa la función calcularIMC(peso, altura) de tres formas diferentes:
const peso = 74;
const altura = 186;

// Declaración de función (function declaration).

function calcularIMC(peso, altura) {
  const alturaMetros = altura / 100;
  const imc = peso / alturaMetros ** 2;

  return imc.toFixed(2);
}

console.log(calcularIMC(peso, altura));


// Expresión de función (function expression).

const calcularIMC = function (peso, altura) {
  const alturaMetros = altura / 100;
  const imc = peso / alturaMetros ** 2;

  return imc.toFixed(2);
};

console.log(calcularIMC(peso, altura));

// Función flecha (arrow function).

const calcularIMC = (peso, altura) => peso / ((altura / 100)**2);



// 3.2 Parámetros: rest y spread

// a) Crea una función 'sum' que acepte cualquier cantidad de
//    argumentos numéricos y devuelva su suma (usa ...rest)

function sum(...numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5, 4));

// b) Crea una función 'max' que reciba cualquier cantidad de
//    números y devuelva el mayor

function max(...numeros) {
  return Math.max(...numeros);
}
console.log(max(1, 3, 5, 4, 2, 7, 6, 8));

// c) Dado este array, llama a la función sum usando spread
const numbers = [4, 8, 15, 16, 23, 42];

console.log(sum(...numbers));

// d) Crea una función 'createUser' con parámetros por defecto:
//    name = 'Anónimo', role = 'user'

function createUser(name = 'Anónimo', role = 'user') {
  return {
    name,
    role,
  };
}

console.log(createUser('Anonimo', 'user'));



// 3.4 Métodos iterativos de arrays

// Dado el array de estudiantes, resuelve usando forEach, filter, map y reduce:

const students = [
  { name: 'Ana', grade: 8.5 },
  { name: 'Bea', grade: 4.2 },
  { name: 'Carlos', grade: 6.0 },
  { name: 'Diana', grade: 9.1 },
  { name: 'Eva', grade: 3.5 },
  { name: 'Felipe', grade: 7.8 },
];

// a) Imprime el nombre de cada estudiante (forEach)

for (let s of students) {
  console.log(s.name);
}

// b) Obtén solo los aprobados (grade >= 5) (filter)
const aprobados = students.filter((students) => students.grade >= 5);
console.log(aprobados);

// c) Obtén un array con los nombres en mayúsculas (map)
const nombresMay = students.map((students) => students.name.toUpperCase());
console.log(nombresMay);

// d) Calcula la nota media de la clase (reduce)
const notaSuma = students.reduce((acc, s) => acc + s.grade, 0);
const notaMedia = notaSuma / students.length;
console.log(notaMedia.toFixed(2));

// e) Obtén el nombre del estudiante con la nota más alta (reduce)
const notaAlta = students.reduce((max, s) => {
  if (s.grade > max.grade) {
    return s;
  } else {
    return max;
  }
}, students[0]);

console.log(notaAlta.name);

// f) Encadena: de los aprobados, obtén sus nombres ordenados
//    alfabéticamente

const alfab = aprobados.sort();

console.log(alfab);

// 3.5 sort y más métodos

const nums = [10, 5, 8, 1, 7, 2, 6, 3, 9, 4];

// a) Ordena de menor a mayor
const menorMayor = nums.sort((a, b) => a - b);
console.log(menorMayor);

// b) Ordena de mayor a menor
const mayorMenor = nums.sort((a, b) => b - a);
console.log(mayorMenor);

// c) Ordena las siguientes palabras por longitud
const words = ['casa', 'elefante', 'sol', 'programación', 'web'];

const logitud = words.sort((a, b) => a.length - b.length);
console.log(logitud);

// d) Ordena los productos por precio (ascendente)
const items = [
  { name: 'A', price: 30 },
  { name: 'B', price: 10 },
  { name: 'C', price: 25 },
];

items.sort((a, b) => a.price - b.price);

console.log(items);

*/
// 3.6 Expresiones regulares

// Crea funciones que validen los siguientes formatos usando expresiones regulares:

//Crea funciones que validen los siguientes formatos usando expresiones regulares:

//isValidEmail(email): formato básico (contiene @ y dominio con punto).

//isValidPhone(phone): 9 dígitos, puede empezar con +34.

//isValidPassword(pwd): mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

//extractHashtags(text): extrae todos los hashtags (#palabra) de un texto.

// 3.7 Closures y funciones de orden superior

// a) Crea una función 'counter()' que devuelva una función.
// Cada vez que se llame a la función devuelta, debe incrementar
// y devolver un contador interno.
const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

// b) Crea una función 'multiplier(factor)' que devuelva
// una función que multiplique su argumento por factor
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
