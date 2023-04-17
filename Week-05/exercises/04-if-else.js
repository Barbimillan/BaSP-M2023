console.log("Exercise 04-If else");

console.log("Exercise 4a");
var number = Math.random();
if(number >= 0,5) {
    console.log("Greater than or equal to 0,5")
} else {
    console.log("Lower than 0,5")
};

console.log("Exercise 4b");
var age = 23;
switch (true) {
    case age < 2:
        alert("Bebe");
        break;
    case age >= 2 && age <= 12:
        alert("Niño");
        break;
    case age >= 13 && age <= 19:
        alert("Adolescente");
        break;
    case age >= 20 && age <= 30:
        alert("Joven");
        break;
    case age >= 31 && age <= 60:
        alert("Adulto");
        break;
    case age >= 61 && age <= 75:
        alert("Adulto Mayor");
        break;
    case age > 75:
        alert("Anciano");
        break;
    default:
        break;
};