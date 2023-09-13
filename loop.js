// Question 1: Write a for loop in JavaScript that
//  prints the numbers from 1 to 10.

for (let index = 1; index <= 10; index++) {
  console.log(index);
}
console.log("************");
// Question 2: Write a for loop in JavaScript
// that prints the even numbers from 2 to 20.

for (let index = 2; index <= 20; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

// Question 3: Write a while loop in JavaScript
// that calculates the sum of all integers from 1 to 100.

console.log("*********************");

let counter = 1;
let sum = 0;

while (counter <= 100) {
  sum += counter;
  counter++;
}
console.log(sum);

console.log("*********************");

// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript
//  that iterates through an array of numbers and calculates their sum.

const numbers1 = [0, 0, 1, 2, 0, 2];
let total = 0;
for (let index = 0; index < numbers1.length; index++) {
  total += numbers1[index];
}
console.log(total);
