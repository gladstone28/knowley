
/*
Concatenation
The + lets us do more then just add numbers. We can use it to concatenate (glue together) strings with strings:

*/

const name = 'John';
const lastName = 'Stewart';

const initials = name[0] + lastName[0];
console.log(initials);// 'JS'

const fullName = 'Mr.' + name + ' ' + lastName;
console.log(fullName);// 'Mr. John Stewart'


// ..and strings with numbers:

console.log(
  '12' + 34, // '1234'
  12 + '34', // '1234'
);

