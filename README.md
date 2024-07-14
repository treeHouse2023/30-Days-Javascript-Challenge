# JavaScript Activities (Day -1)

## Activity 1: Variable Declaration

### Task 1: using `var`
```javascript
console.log('---------Activity 1: Variable Declaration--------- \n Task 1: using var');
var count = 100;
console.log(count);
```
# Output:
```javascript
100
```
# Task 2: using let
```javascript

console.log('---------Activity 1: Variable Declaration--------- \n Task 2: using let');
let challenge = '30 Days of Coding';
console.log(challenge);
```
# Output:
```javascript
30 Days of Coding
```
# Activity 2: Constant Declaration
Task 3: using const
```javascript
console.log('---------Activity 2: Constant Declaration--------- \n Task 3: using const');
const isComplete = true;
console.log('Boolean Value:', isComplete);
```
# Output:

```javascript
Boolean Value: true
```
# Activity 3: Data Types
Task 4: Create Variables using different data types and find their type
```javascript
Copy code
console.log('---------Activity 3: Data Types--------- \n Task 4: Create Variables using different data types and find their type');

let age = 25;
console.log('1: ', typeof (age));

let greeting = 'Hello, World!';
console.log('2: ', typeof (greeting));

const isStudent = true;
console.log('3: ', typeof(isStudent));

const courseDetails = {
    name: 'Full Stack Development',
    duration: '3 months',
    instructor: 'John Doe'
};
console.log('4: ', typeof (courseDetails));

const mixedArray = ['HTML', 5, false];
console.log('5: ', typeof(mixedArray));
```
# Output:
```javascript
1:  number
2:  string
3:  boolean
4:  object
5:  object
```
# Activity 4: Reassigning Variables
Task 5
```javascript
Copy code
console.log('---------Activity 4: Reassigning Variables--------- \n Task 5:');
let score = 50;
console.log(score);

// Reassigning Variable
score = 75;
console.log(score);
```
# Output:
```javascript
50
75
```
# Activity 5: Understanding Const
Task 6
```javascript
console.log('---------Activity 5: Understanding Const--------- \n Task 6:');
const favoriteLanguage = 'JavaScript';
console.log(favoriteLanguage);

// Trying to reassign a const variable will cause an error
// favoriteLanguage = 'Python'; // Uncommenting this line will throw TypeError: Assignment to constant variable.
// console.log(favoriteLanguage)
```
# Output:
```JavaScript
Note: Uncommenting the line favoriteLanguage = 'Python'; will throw an error: TypeError: Assignment to constant variable.
```
# JavaScript Activities (Day -2)

This repository contains various JavaScript activities demonstrating arithmetic operations, assignment operators, comparison operators, logical operators, and ternary operators.

## Activity 1: Arithmetic Operations

```javascript
console.log("Activity 1: Arithmetic Operations");
let num1 = 15, num2 = 3;
console.log(`Sum: ${ num1 + num2 }`);
console.log(`Difference: ${ num1 - num2 }`);
console.log(`Multiplication: ${ num1 * num2 }`);
console.log(`Division: ${ num1 / num2 }`);
console.log(`Remainder: ${ num1 % num2 }`);
```
# Output
```javascript
Activity 1: Arithmetic Operations
Sum: 18
Difference: 12
Multiplication: 45
Division: 5
Remainder: 0
```
# Activity 2: Assignment Operators
```javascript

console.log("Activity 2: Assignment Operators");
let x = 20;
console.log(`Value of x: ${x}`);
x += 10;
console.log(`New Value of x (x += 10): ${x}`);
x -= 7;
console.log(`New Value of x (x -= 7): ${x}`);
x *= 2;
console.log(`New Value of x (x *= 2): ${x}`);
x /= 4;
console.log(`New Value of x (x /= 4): ${x}`);
x %= 5;
console.log(`New Value of x (x %= 5): ${x}`);
```
# Output
```javascript

Activity 2: Assignment Operators
Value of x: 20
New Value of x (x += 10): 30
New Value of x (x -= 7): 23
New Value of x (x *= 2): 46
New Value of x (x /= 4): 11.5
New Value of x (x %= 5): 1.5
```
# Activity 3: Comparison Operators
```javascript
console.log("Activity 3: Comparison Operators");
console.log(`15 > 3 (greater than): ${num1 > num2}`);
console.log(`15 < 3 (less than): ${num1 < num2}`);
console.log(`15 >= 3 (greater than or equal to): ${num1 >= num2}`);
console.log(`15 <= 3 (less than or equal to): ${num1 <= num2}`);

let a = 3, b = "3";
console.log(`Equal to (3 == '3'): ${a == b}`);
console.log(`Strictly equal to (3 === '3'): ${a === b}`);
```
# Output
```javascript
Activity 3: Comparison Operators
15 > 3 (greater than): true
15 < 3 (less than): false
15 >= 3 (greater than or equal to): true
15 <= 3 (less than or equal to): false
Equal to (3 == '3'): true
Strictly equal to (3 === '3'): false
```
# Activity 4: Logical Operators
```javascript
console.log("Activity 4: Logical Operators");
console.log(`Logical AND: (4 > 2) && (6 < 9): ${(4 > 2) && (6 < 9)}`);
console.log(`Logical OR: (4 > 6) || (6 < 9): ${(4 > 6) || (6 < 9)}`);
console.log(`Logical NOT: !(4 > 6): ${!(4 > 6)}`);
```
# Output
```javascript
Activity 4: Logical Operators
Logical AND: (4 > 2) && (6 < 9): true
Logical OR: (4 > 6) || (6 < 9): true
Logical NOT: !(4 > 6): true
```
# Activity 5: Ternary Operator
```javascript
console.log("Activity 5: Ternary Operator");
let number = -5;
let isPositive = number >= 0 ? 'Positive' : 'Negative';
console.log(`${number} is a ${isPositive} Number`);
```
# Output
```javascript
Activity 5: Ternary Operator
-5 is a Negative Number
```



