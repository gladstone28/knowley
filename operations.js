/*
Numbers
In JavaScript, all numbers belong to the number type, and they can contain both integer and decimal values. Let's explore the operations we can perform with numbers, along with their precedence.

Operations
As you know, numbers can be added subtracted, multiplied, divided, raised to a power, and divided to get a remainder. Here are a few examples:
*/

let addition = 10 + 5; // addition
console.log(addition); // 15

let subtraction = 10 - 5; // subtraction
console.log(subtraction); // 5

let multiplication = 10 * 5; // multiplication
console.log(multiplication); // 50

let division = 10 / 5; // division
console.log(division); // 2

let exponentiation = 10 ** 5; // exponentiation
console.log(exponentiation); // 100000

let remainder = 16 % 7; // division remainder
console.log(remainder); // 2 - subtract 7 until the result is <7

// Using the % operator, you can get the last digit of a number:

let number = 345 % 10;
console.log(number); // 5

// Or check if a number is even:

number = 345 % 2;
console.log(number); // remainder 1 — an odd number

/*
Precedence
Operations are usually executed in sequence from left to right, with the exception of multiplication and division. They have a higher precedence, so they are performed before addition and subtraction:
*/

console.log(
  5 + 1 * 10 // 15, not 60
);

/*
To modify this order of action, use (). Whatever expression you’ll enclose in parenthesis, it will take precedence and be executed first. Here's an example:
*/
console.log(
  (5 + 1) * 10 // 60
);

// If there's more than one (), expressions are executed from left to right.


