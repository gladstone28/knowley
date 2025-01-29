https://app.knowely.com/study/frontend-developer-en/js-basics-en/js-boolean-en?learnItemsFilter=All&section=theory&theoryId=1958

Boolean Type
The Boolean type can take one of only two values, true and false. We use it to state truths and falsehoods, respectively:

const isAdult = true;
const hasEnoughMoney = false;

Number Comparison
Boolean values can also be obtained as a result of comparisons, e.g., of numbers. JavaScript lets us compare them with the operators sourced straight from math lessons:

> — greater than
< — less than
>= — greater than or equal to
<= — less than or equal to
...and two more, not to be confused with the assignment = operator:

=== — strict equality
!== — strict inequality
Here's an example of their use:

const a = 2;

console.log(
  a === 2, // true
  a !== 2, // false
  a > 2, // false
  a < 2, // false
  a >= 2, // true
  a <= 2, // true
);

And another one, for good measure:

const age = 25;

let isAdult = age >= 18;
console.log (isAdult); // true

const isNotAdult = age < 18;
console.log (isNotAdult); // false

Negation Operator (!)
To get the opposite value of a variable, we can use the logical negation operator !:

const age = 25;
let isAdult = age >= 18;

console.log(isAdult); // true
console.log(!isAdult); // false

Logical AND (&&)
To check whether two conditions are true simultaneously, we can use the && operator (logical AND). Its result will be true only if both conditions are true:

let cash = 50;
let price = 40;
let hasEnoughCash = cash >= price;

let age = 25;
let isAdult = age >= 18;

let canBuy = isAdult && hasEnoughCash; 

console.log(canBuy); // true

Logical OR (||)
To check whether at least one condition is true, we can use the || operator (logical OR). Its result will be true if at least one of the conditions is true:

let cash = 50;
let creditCard = 20;
let price = 40;

let hasEnoughCash = cash >= price;
let hasEnoughCredit = creditCard >= price;

let canBuy = hasEnoughCash || hasEnoughCredit; 
console.log(canBuy); // true

Useful Keyboard Shortcuts
F2 to rename a variable
Shift + Alt + ↑ (on Windows) or Shift + Option + ↑ (on macOS) to duplicate the line up
Shift Alt + ↓ (on Windows) orShift + Option + ↓ (on macOS) to duplicate the line down
