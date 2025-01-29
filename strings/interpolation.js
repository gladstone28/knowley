
/*
Interpolation
Interpolation is the insertion of values into a string. We perform it with the ${...} syntax. To make it work, a string should be wrapped with backticks `...` instead of single quotes '...':

*/

const name = 'John';
const lastName = 'Stewart';

const fullName = `Mr. ${name} ${lastName}`;

console.log(fullName); // 'Mr. John Stewart'

/*
Here's another example to show the difference between string concatenation and interpolation

*/

const myName = 'John';
const age = 30;

// concatenation
const concatenationGreeting = 'Hello! My name is ' + myName + ' and I am ' + age + '.';
console.log(concatenationGreeting); // 'Hello! My name is John and I am 30.'

// interploation
const interpolationGreeting = `Hello! My name is ${myName} and I am ${age}.`;
console.log(interpolationGreeting); // 'Hello! My name is John and I am 30.'

