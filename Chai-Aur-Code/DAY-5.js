//act 1
function checkEvenOdd(number) {
  if (isNaN(number)) {
    return console.log(`Only number is accepted`);
  } else if (number % 2 === 0) {
    return console.log(`${number} is even.`);
  } else {
    return console.log(`${number} is odd.`);
  }
}
checkEvenOdd(5);

//act 2
function calculateSquare(number) {
  return number * number;
}

//act 3
const findMaximum = function (num1, num2) {
  const maxNum = Math.max(num1, num2);
  console.log(`The maximum of ${num1} and ${num2} is ${maxNum}.`);
  return maxNum;
};

findMaximum(70, 29);

//act 4
function concatStr(str1, str2) {
  return str1 + str2;
}
console.log(concatStr("zainul", "khan"));

//act 5
const sumNumbers = (a, b) => a + b;
const sol = sumNumbers(1, 2);
console.log("sol", sol);

//act 6
const containsCharacter = (str, char) => str.includes(char);
console.log("containsCharacter", containsCharacter("zainul", "z"));

//act 7
function multiply(a, b = 3) {
  return a * b;
}
console.log("mul", multiply(2));

//act 8
function greet(name, age = 30) {
  return `Hello ${name}, you are ${age} years old!`;
}

//act 9
function repeat(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

function logHi() {
  console.log("Hi");
}

repeat(logHi, 5);

//act 10

function compose(func1, func2, value) {
  //inject val to first func
  const result1 = func1(value);
  //use the result as an arg in second function
  return func2(result1);
}

function square(num) {
  return num * num;
}

function addOne(num) {
  return num + 1;
}

const result = compose(square, addOne, 5);
console.log(result); // Output: 26
