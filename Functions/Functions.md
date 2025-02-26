link to lesson

https://app.knowely.com/study/frontend-developer-en/js-basics-en/js-functions-en?learnItemsFilter=All&section=theory&theoryId=1959



Functions
A function is a block of code that performs a specific task. Functions are the fundamental "building blocks" of a program, and they allow you to reuse the same code multiple times with different data, avoiding duplication.

Function Declaration
In JavaScript, there are several ways to create (synonyms: "declare", "define") a function. For instance, we can do so with a function keyword, similar to how let lets us declare variables. Here's an exemplary function that calculates the area of a rectangle and prints it to the console:

function calculateArea(length, width) {
  let area = length * width;

  console.log(area);
}

Let's break the code apart:

function is the keyword that declares the function
calculateArea is the name of the function, followed by parentheses ()
length and width are parameters of the function; they are variables that will receive values when the function is used
All commands inside curly braces {} are called the function body. Functions can have one parameter, multiple parameters, or no parameters at all.

Function Call
To execute the commands inside a function, we need to call the function itself. We do so by writing the function's name and succeeding it with arguments in parentheses, which are specific values for the function's parameters. Let's call the calculateArea function with arguments 5 and 7:

function calculateArea(length, width) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5, 7); // It will print 35 in the console

Here, 5 will be assigned to the length parameter, and 7 — to the width parameter. But sometimes, parameters might already have a predefined or default value. To demonstrate, let's calcualte the area of a fabric roll with a standard width of 1.5 meters:

function calculateArea(length, width = 1.5) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5); // the `width` value will be 1.5, so the result is 7.5

Default values are similar to the default settings on a phone set by the manufacturer. They are predefined, but you can always change them by passing new values as arguments when calling the function:

function calculateArea(length,  width = 1.5) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5); // The `width` is 1.5 because we didn't pass another value, so the result is 7.5
calculateArea(5, 7); // We provided new values for `width`, so the result is 35

Returning a Value From a Function
Most often, we don't want to just print the results of calculations to the console, but use them in the program for further actions. Such a function should return a value. In the function body, we use the return keyword, followed by an expression or value that we want to return:

function calculateArea(length, width) {
  let area = length * width;
  
  return area;
}

Previously, we called the function in a separate line, but to use the result of the function in the program, we call it directly — inside of an expression. For instance, to calculate the total area of 10 tables:

function calculateArea(length, width) {
  let area = length * width;
  
  return area;
}

let totalArea = 10 * calculateArea(5, 7);

If a function doesn't have the return keyword or if there's no value to the right of return, the result is undefined:

function calculateArea(length,  width) {
  let area = length * width;

  return;
}

let tableArea = calculateArea(5,7);

console.log(tableArea); // undefined

For simplicity, we can remove the area variable declaration and place the calculation expression after the return keyword:

function calculateArea(length, width) {
  return length * width;
}

Any commands following the return keyword won't be executed:

function calculateArea(length, width) {
  return length * width;

  console.log(area); // this command will not be executed
}

Function Naming
The name of a function should convey its purpose. It can consist of multiple words, but the first word should always be a verb that describes what the function does. Similar to variable names, the first word is written in lowercase, while all succeeding words are written in uppercase:

// good name
function sayHello(personName) { // explains the purpose of the function
  console.log(`Hello, ${personName}!`);
}

// bad names
function func(personName) { // it is not clear from the name what the function does
  console.log(`Hello, ${personName}!`);
}

function sayhello(personName) { // the second word is written with a lowercase letter
  console.log(`Hello, ${personName}!`);
}

Useful Keyboard Shortcuts
F2 to rename a variable
Shift + Alt + ↑ (on Windows) or Shift + Option + ↑ (on macOS) to duplicate the line up
Shift Alt + ↓ (on Windows) orShift + Option + ↓ (on macOS) to duplicate the line down



