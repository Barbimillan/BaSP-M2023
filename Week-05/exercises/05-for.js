console.log("Exercise 05-For");

console.log("Exercise 5a");
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
//  for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var numbers = ["one", "two", "three", "four", "five"];
for (var n = 0; n < numbers.length; n++) {
    alert(numbers[n]);
}

console.log("Exercise 5b");
// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
// una alerta por cada palabra modificada.
for (var n = 0; n < numbers.length; n++) {
    var upperCase = numbers[n].substring(0,1).toUpperCase() + numbers[n].substring(1);
    alert(upperCase);
}

console.log("Exercise 5c");
// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
// a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
// Al final mostrar una única alerta con la cadena completa.
var sentence = " ";
for (var s = 0; s < numbers.length; s++) {
    sentence = sentence + numbers[s]
}
alert(sentence)

console.log("Exercise 5d");
// Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la 
// repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro
// del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array 
// final (utilizar console.log)
var array = [ ]
for (var a = 0; a <= 9; a++) {
    array.push(a)
}
console.log(array)