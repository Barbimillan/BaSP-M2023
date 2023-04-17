console.log("Exercise 05-For");

console.log("Exercise 5a");
var numbers = ["one", "two", "three", "four", "five"];
for (var n = 0; n < numbers.length; n++) {
    alert(numbers[n]);
}

console.log("Exercise 5b");
for (var n = 0; n < numbers.length; n++) {
    var upperCase = numbers[n].substring(0,1).toUpperCase() + numbers[n].substring(1);
    alert(upperCase);
}

console.log("Exercise 5c");
var sentence = " ";
for (var s = 0; s < numbers.length; s++) {
    sentence = sentence + numbers[s]
}
alert(sentence)

console.log("Exercise 5d");
var array = [ ]
for (var a = 0; a <= 9; a++) {
    array.push(a)
}
console.log(array)