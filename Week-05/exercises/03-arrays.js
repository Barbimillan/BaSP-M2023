console.log("Exercise 03-Arrays");

console.log("Exercise 3a");
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
// "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
// 5 y 11 (utilizar console.log).
var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month[4],month[10]);

console.log("Exercise 3b");
// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(month.sort());

console.log("Exercise 3c");
// Agregar un elemento al principio y al final del array (utilizar unshift y push).
month.push("month");
month.unshift("year");
console.log(month);

console.log("Exercise 3d");
// Quitar un elemento del principio y del final del array (utilizar shift y pop).
month.pop();
month.shift();
console.log(month);

console.log("Exercise 3e");
// Invertir el orden del array (utilizar reverse).
month.reverse();
console.log(month);

console.log("Exercise 3f");
// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var monthtext = month.join("-");
console.log(monthtext);

console.log("Exercise 3g");
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var month2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month2.slice(4,11));