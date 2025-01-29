

THEORY ON STRINGS


#### Strings
A string (string) is a sequence of characters: letters, numbers, special symbols, etc., used to represent textual data in programs. They must be enclosed in quotes, 'single` or "double", with identical quote types on both ends of the string.

#### String Length

You can find out the length of a string (the number of characters in it) using the length property:
```js
const name = 'John';

console.log(name.length); // 4
```
#### Character in a String

You can access an individual character in a string by its index, but remember that string indices start from 0 (not 1!). Here's an example:
```
const name = 'John';

console.log(
  name[0], // 'J'
  name[1], // 'o'
  name[2], // 'h'
  // the index of the last character is 1 less than the string length
  name[name.length - 1], // 'n'
);
```
Also, in square brackets, you can write an expression and calculate the index. For example, the index of the last character is 1 less than the string's length:
```
const name = 'John';
const lastIndex = name.length - 1;

console.log(
  name[lastIndex], // 'n'
  name[name.length - 1], // 'n' - calculation directly in []
);
```

#### Concatenation

The + lets us do more then just add numbers. We can use it to concatenate (glue together) strings with strings:
```
const name = 'John';
const lastName = 'Stewart';

const initials = name[0] + lastName[0];
console.log(initials);// 'JS'

const fullName = 'Mr.' + name + ' ' + lastName;
console.log(fullName);// 'Mr. John Stewart'
```
...and strings with numbers:
```
console.log(
  '12' + 34, // '1234'
  12 + '34', // '1234'
);
```

💡 Numbers enclosed in quotes are treated as a string.

#### Interpolation

Interpolation is the insertion of values into a string. We perform it with the ${...} syntax. To make it work, a string should be wrapped with backticks `...` instead of single quotes '...':

```js
const name = 'John';
const lastName = 'Stewart';

```

const fullName = `Mr. ${name} ${lastName}`;

console.log(fullName); // 'Mr. John Stewart'

Here's another example to show the difference between string concatenation and interpolation:
```
const name = 'John';
const age = 30;

// concatenation
const concatenationGreeting = 'Hello! My name is ' + name + ' and I am ' + age + '.';
console.log(concatenationGreeting); // 'Hello! My name is John and I am 30.'

// interploation
const interpolationGreeting = `Hello! My name is ${name} and I am ${age}.`;
console.log(interpolationGreeting); // 'Hello! My name is John and I am 30.'
```
In most cases, interpolation is more intuitive and therefore much more popular.


