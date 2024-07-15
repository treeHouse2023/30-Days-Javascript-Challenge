// Day 3: Control Structures

// Activity 1: If-Else Statement

// Check if a Number is Positive, Negative, or Zero
let a = 2;
if (a > 0) {
  console.log(a + " is a Positive number");
} else if (a < 0) {
  console.log(a + " is a Negative number");
} else {
  console.log("The number is 0");
}

// Check Voting Eligibility
let age = 30;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Activity 2: Nested If-Else Statement

let num1 = 9;
let num2 = 5;
let num3 = 4;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the greatest");
} else if (num2 > num3) {
  console.log(num2 + " is the greatest");
} else {
  console.log(num3 + " is the greatest");
}

// Activity 3: Switch Case

// Example 1: Days of the Week
switch (9) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Enter a valid number");
    break;
}

// Example 2: Grading System
let marks = 100;
switch (true) {
  case marks <= 20:
    console.log("Grade: F");
    break;
  case marks <= 40:
    console.log("Grade: D");
    break;
  case marks <= 60:
    console.log("Grade: C");
    break;
  case marks <= 80:
    console.log("Grade: B");
    break;
  case marks <= 100:
    console.log("Grade: A");
    break;
}

// Activity 4: Ternary Operator

let num = 4;
num % 2 === 0
  ? console.log("The Number is Even")
  : console.log("The Number is Odd");

// Activity 5: Combining Conditions

let Year = 2024;
if ((Year % 4 == 0 && Year % 100 != 0) || Year % 400 == 0) {
  console.log(Year + " is a leap year");
} else {
  console.log(Year + " is not a leap year");
}
