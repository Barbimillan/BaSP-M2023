console.log("Exercise 06-Functions");

console.log("Exercise 6a");
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
// la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
// la consola del navegador.
function exercise6(number1,number2) {
    return number1 + number2;
}
var total = exercise6(14,10);
console.log(total);

console.log("Exercise 6b");
// Copiar la función suma anterior y agregarle una validación para controlar si alguno de los 
// parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los 
// parámetros tiene error y retornar el valor NaN como resultado.
function exercise6(number1,number2) {
    if (number1 === Number(number1) && number2 === Number(number2)) {
        return number1 + number2;
    } else {
        alert(NaN)
    }
}
console.log(exercise6(15,5));
console.log(exercise6("nn","bb"));

console.log("Exercise 6c");
// Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es
// un número entero.
function validateInteger(x) {
    return Number.isInteger(x);
}
console.log(validateInteger(42));

console.log("Exercise 6d");
// Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función 
// del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar
// un alert con el error y retornar el número convertido a entero (redondeado).
function exercise6dd(number1, number2) {
    if(exercise6(number1,number2)){
        if(validateInteger(number1)){
            validateInteger(number2)
        }else{
            alert("uno de los parametros no es un numero entero")
        }
    }else{
        alert("Uno de los parametros no es un numero")
    }
    return Math.round(number1 + number2);
}
alert("el total redondeado es " + exercise6dd(5.5, 1));

console.log("Exercise 6e");
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de 
// una nueva función probando que todo siga funcionando igual que en el apartado anterior.
function exercise6e(number1, number2) {
    exercise6dd(number1, number2);
    return Math.round(number1 + number2);
}
alert("el total redondeado es " + exercise6e(7, 1));