console.log("Exercise 02-Strings");

console.log("Exercise 2a");
// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
var course = "radiumrocket";
console.log(course.toUpperCase());

console.log("Exercise 2b");
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var exercise = "javascript html css";
var word5 = exercise.substring(0,5);
console.log(word5);

console.log("Exercise 2c");
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var word3 = exercise.substring(0,3);
console.log(word3);

console.log("Exercise 2d");
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una 
// nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var word1 = exercise.substring(0,1).toUpperCase() + exercise.substring(1,19);
console.log(word1);

console.log("Exercise 2e");
// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var space = exercise.indexOf(" ");
console.log(space);

console.log("Exercise 2f");
// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
// espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un 
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var exercisef = "problematic javascript";
console.log(exercisef.substring(0,1).toUpperCase() + exercisef.substring(1,11) + " " + 
exercisef.substring(12,13).toUpperCase() + exercisef.substring(13,22));