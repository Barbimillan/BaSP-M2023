console.log("Exercise 02-strings");

console.log("Exercise 2a");
var course = "radiumrocket";
console.log(course.toUpperCase());

console.log("Exercise 2b");
var exercise = "javascript html css";
var word5 = exercise.substring(0,5);
console.log(word5);

console.log("Exercise 2c");
var word3 = exercise.substring(0,3);
console.log(word3);

console.log("Exercise 2d");
var word1 = exercise.substring(0,1).toUpperCase() + exercise.substring(1,19);
console.log(word1);

console.log("Exercise 2e");
var space = exercise.indexOf(" ");
console.log(space);

console.log("Exercise 2f");
var exercisef = "problematic javascript";
console.log(exercisef.substring(0,1).toUpperCase() + exercisef.substring(1,11) + " " + 
exercisef.substring(12,13).toUpperCase() + exercisef.substring(13,22));