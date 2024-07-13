# JavaScript Activities

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





