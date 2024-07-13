console.log(
  "---------Activity 1: Variable Declaration--------- \n Task 1: using var"
);
var count = 100;
console.log(count);

console.log(
  "---------Activity 1: Variable Declaration--------- \n Task 2: using let"
);
let challenge = "30 Days of Coding";
console.log(challenge);

console.log(
  "---------Activity 2: Constant Declaration--------- \n Task 3: using const"
);
const isComplete = true;
console.log("Boolean Value:", isComplete);

console.log(
  "---------Activity 3: Data Types--------- \n Task 4: Create Variables using different data types and find their type"
);
let age = 25;
console.log("1: ", typeof age);

let greeting = "Hello, World!";
console.log("2: ", typeof greeting);

const isStudent = true;
console.log("3: ", typeof isStudent);

const courseDetails = {
  name: "Full Stack Development",
  duration: "3 months",
  instructor: "John Doe",
};
console.log("4: ", typeof courseDetails);

const mixedArray = ["HTML", 5, false];
console.log("5: ", typeof mixedArray);

console.log("---------Activity 4: Reassigning Variables--------- \n Task 5:");
let score = 50;
console.log(score);

//Reassigning Variable
score = 75;
console.log(score);

console.log("---------Activity 5: Understanding Const--------- \n Task 6:");
const favoriteLanguage = "JavaScript";
console.log(favoriteLanguage);
// Trying to reassign a const variable will cause an error
// favoriteLanguage = 'Python' // Uncommenting this line will throw TypeError: Assignment to constant variable.
// console.log(favoriteLanguage)
