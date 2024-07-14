// Activity 1: Arithmetic Operations
console.log("Activity 1: Arithmetic Operations");
let num1 = 15,
  num2 = 3;
console.log(`Sum: ${num1 + num2}`); // Sum: 18
console.log(`Difference: ${num1 - num2}`); // Difference: 12
console.log(`Multiplication: ${num1 * num2}`); // Multiplication: 45
console.log(`Division: ${num1 / num2}`); // Division: 5
console.log(`Remainder: ${num1 % num2}`); // Remainder: 0

// Activity 2: Assignment Operators
console.log("Activity 2: Assignment Operators");
let x = 20;
console.log(`Value of x: ${x}`); // Value of x: 20
x += 10;
console.log(`New Value of x (x += 10): ${x}`); // New Value of x: 30
x -= 7;
console.log(`New Value of x (x -= 7): ${x}`); // New Value of x: 23
x *= 2;
console.log(`New Value of x (x *= 2): ${x}`); // New Value of x: 46
x /= 4;
console.log(`New Value of x (x /= 4): ${x}`); // New Value of x: 11.5
x %= 5;
console.log(`New Value of x (x %= 5): ${x}`); // New Value of x: 1.5

// Activity 3: Comparison Operators
console.log("Activity 3: Comparison Operators");

console.log(`15 > 3 (greater than): ${num1 > num2}`); // true
console.log(`15 < 3 (less than): ${num1 < num2}`); // false
console.log(`15 >= 3 (greater than or equal to): ${num1 >= num2}`); // true
console.log(`15 <= 3 (less than or equal to): ${num1 <= num2}`); // false

let a = 3,
  b = "3";
console.log(`Equal to (3 == '3'): ${a == b}`); // true
console.log(`Strictly equal to (3 === '3'): ${a === b}`); // false

// Activity 4: Logical Operators
console.log("Activity 4: Logical Operators");
console.log(`Logical AND: (4 > 2) && (6 < 9): ${4 > 2 && 6 < 9}`); // true
console.log(`Logical OR: (4 > 6) || (6 < 9): ${4 > 6 || 6 < 9}`); // true
console.log(`Logical NOT: !(4 > 6): ${!(4 > 6)}`); // true

// Activity 5: Ternary Operator
console.log("Activity 5: Ternary Operator");
let number = -5;
let isPositive = number >= 0 ? "Positive" : "Negative";
console.log(`${number} is a ${isPositive} Number`); // -5 is a Negative Number
