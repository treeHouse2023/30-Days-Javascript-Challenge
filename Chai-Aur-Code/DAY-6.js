//act 1
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//act 2
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

//act 3
numbers.push(6);
console.log("After push:", numbers);

//act 4
numbers.pop();
console.log("After pop:", numbers);

//act 5
numbers.shift();
console.log("After shift:", numbers);

//act 6
numbers.unshift(1);
console.log("After unshift:", numbers);

//act 7
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

//act 8
const filterNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Filtered numbers:", filterNumbers);

//act 9
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

//act 10
for (let i = 0; i < numbers.length; i++) {
  console.log(`Element at index ${i}:`, numbers[i]);
}

//act 11
numbers.forEach((num, index) => {
  console.log(`Element at index ${index}:`, num);
});

//act 12
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix:", matrix);

//act 13
console.log("Elem of matrix:", matrix[1][1]);
