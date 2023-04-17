console.log("Exercise 03-Arrays");

console.log("Exercise 3a");
var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month[4],month[10]);

console.log("Exercise 3b");
console.log(month.sort());

console.log("Exercise 3c");
month.push("month");
month.unshift("year");
console.log(month);

console.log("Exercise 3d");
month.pop();
month.shift();
console.log(month);

console.log("Exercise 3e");
month.reverse();
console.log(month);

console.log("Exercise 3f");
var monthtext = month.join("-");
console.log(monthtext);

console.log("Exercise 3g");
var month2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month2.slice(4,11));


