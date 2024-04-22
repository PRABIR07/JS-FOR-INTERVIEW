# What is function

In JavaScript, a function is a fundamental building block that defines a block of code designed to perform a specific task. Functions are executed when they are called (or invoked). They can take inputs known as parameters, perform an action, and optionally return a value.

## What is function Declaration

A function declaration in JavaScript is a way to define a function using the function keyword. It gives the function a name and specifies what the function should do.
Here's an example of a function declaration:

```js
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
```

In this example, we've declared a function called greetUser that takes a single parameter name. When we call this function and pass in a name, it will log a greeting message to the console.

You can call the function like this:

```js
greetUser("Prabir"); // Output: Hello, Prabir!
greetUser("Kumar"); // Output: Hello, Kumar!
```

## What is function expression

A function expression is a way to define a function by assigning it to a variable.

Example:

```js
let greetUser = function (name) {
  console.log(`Hello, ${name}!`);
};
```

- function expression can create anonymous functions.

Imp:

`No result when not capturing the return value:`

- If you call a function with a return statement without capturing the return value, the function will execute, but you won't see any output or result.

- This is because the returned value is not being used or stored anywhere.

```js
function addNumbers(a, b) {
  return a + b;
}

addNumbers(3, 4); // No output, the result is not used
```

To solve the above issue you need to capture the value in some variable or use it in an expression like this:

```js
function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(3, 4); // result will be 7
console.log(result); // Output: 7
```

## What are First Class Functions?

A function can be treated as variable - it can be assigned, passed as an argument, returned from a function, and stored in data structures.

Lets take some example to understand better:

1. Functions can be assigned to variables, just like any other value.

Example:

```js
const greeting = function (name) {
  console.log(`Hello ${name}`);
};
```

2. Functions can be passed as arguments to other functions.

Example:

```js
function executeFn(fn) {
  fn("Pk");
}
executeFn(greeting);
```

3. Functions can be returned from other functions.

Example:

```js
function getFunction() {
  return function () {
    console.log("I am a first-class function");
  };
}

let fn = getFunction();
fn();
```

4. Functions can be stored in data structures like objects, arrays, and more.

Example:

```js
const Arithmetics = {
  add: (a, b) => `${a} + ${b} = ${a + b}`,
  subtract: (a, b) => `${a} - ${b} = ${a - b}`,
};
```

## What is IIFE ?

IIFE stands for `Immediately Invoked function Expression`. It is a js function that runs as soon as it is defined. The "immediately" part means the function is called right away, as soon as the browser encounters it.

The syntax for an IIFE looks like this:

```js
(function () {
  // function logic here
})();
```

The function is wrapped in parentheses, and then immediately called by adding another set of parentheses at the end.

### Why use an IIFE ?

IIFEs serve several important purposes in JavaScript:

1. Creating private scope:

One of the primary use cases for IIFEs is to create private scope. By wrapping the function in parentheses, you're creating a new function scope that is separate from the global scope. This helps prevent naming conflicts and keep your variables and functions private.

Example:

```js
(function () {
  const message = "Hello from the IIFE!";
  console.log(message); // Output: Hello from the IIFE!
})();

console.log(message); // Error: message is not defined
```

2. Executing asynchronous code:

IIFEs can be useful for executing asynchronous code, such as AJAX requests, without polluting the global namespace.

Example:

```js
(async function () {
  const response = await fetch("/api/data");
  const data = await response.json();
  console.log(data);
})();
```

3. Implementing the module pattern

IIFEs are a key component of the module pattern in JavaScript, which is a way to create private variables and methods while exposing a public API.

Example:

```js
const counterModule = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

counterModule.increment();
counterModule.increment();
console.log(counterModule.getCount()); // Output: 2
```

4. Avoiding var scoping issues

Before the introduction of let and const in ES6, IIFEs were often used to work around the function-scoped nature of the var keyword.

Example:

```js
(function () {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i); // Output: 5, 5, 5, 5, 5
    }, i * 1000);
  }
})();
```

In this example, the IIFE creates a new scope for the var i, preventing the setTimeout callbacks from accessing the same i variable.

### Returning values from IIFEs

IIFEs can also return values, which can be assigned to a variable for further use.

Example:

```js
const result = (function (a, b) {
  return a + b;
})(2, 3);

console.log(result); // Output: 5
```

In this case, the IIFE takes two arguments, adds them together, and returns the result, which is then assigned to the result variable.

Q1: What is the output of the blow code ?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 5 5 5 5 5
  }, i * 1000);
}
```

But if we use let instead of var:

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0 1 2 3 4
  }, i * 1000);
}
```

## function Hoisting

Function declarations are "hoisted" in JavaScript, which means the function definition is moved to the top of its scope before the code is executed. This allows you to call the function before it is declared in your code.

```js
greetUser("Prabir"); // Output: Hello, Prabir!

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
```

function expressions (where you assign a function to a variable) are not hoisted, so you can't call them before they are defined.

```js
fn();

const fn = function () {
  console.log(`Hello`);
}; //It gives error
```

Lets take an another example :

```js
var x = 21;

const fb = function () {
  console.log(x); //undefined
  var x = 5;
};

fb();
```

## Params vs Arguments

### Parameters

Parameters are the variables that are listed as part of a function's definition.They act as placeholders for the values (or arguments) that will be passed to the function when it is called.

```js
function add(x, y) {
  return x + y;
}
```

In this function, x and y are parameters. They are like placeholders waiting for values to be substituted when the function is called.

### Arguments

Arguments are the actual values or expressions passed to the function when it is called. These are the real data that replace the parameters when the function is executed.

```js
var result = add(5, 3);
```

Here, 5 and 3 are arguments. They are the actual data passed to the function add, substituting the parameters x and y.

```js

const fn = (a, ...numbers,x,y)=>{
    console.log(a,x,y)
};

fn(2,3,4,5) // It gives error because rest parameter must be last in a parameter list.

```

so to solve this issue

```js
const fn = (a, x, y, ...numbers) => {
  console.log(a, x, y);
};

fn(2, 3, 4, 5); //2,3,4
```

## Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.

## Arrow functions

An arrow function expression is a compact alternative to a traditional function expression.

### function vs Arrow function

1. Syntax:

**Normal Function:**

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 6); //30
```

**Arrow Function**

```js
const multiply = (a, b) => console.log(a * b);

multiply(5, 6); //30
```

2. Arguments

**Normal Function**

```js
function fn() {
  console.log(arguments);
}

fn(1, 3, 2); //[Arguments] { '0': 1, '1': 3, '2': 2 }
```

**Arrow Function**

```js
const fn = () => {
  console.log(arguments);
};

fn(1, 2, 3);
```

- You can't have arguments keywords in arrow functions .

3. `this` keyword

```js
let stu = {
  name: "Prabir",
  fn1: () => {
    console.log("This is arrow function" + " " + this.name);
  },
  fn2: function () {
    console.log("This is normal function" + " " + this.name);
  },
};

stu.fn1(); //This is arrow function undefined
stu.fn2(); // This is normal function Prabir
```

- Arrow functions do not create their own this context. Instead, they inherit this from the surrounding code where the arrow function is defined. This means if you use this inside an arrow function, it refers to the this value of the outer function or global scope, not the this of the function itself, thatswhy it shows undefined.

- Regular functions bind their own this based on how they are called. If you call a function as a method of an object (like object.method()), this inside the function will refer to the object.
