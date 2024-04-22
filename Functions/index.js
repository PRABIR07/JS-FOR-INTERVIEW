// console.log(square(5));
// console.log(result(5));

// const result = function square(n) {
//   return n * n;
// };

// console.log(result(5));

// function greet(name) {
//   return `Hello ${name}`;
// }

// const result = greet("John");

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("Alice"); // Output: Hello, Alice!

// const result = function square(n) {
//   return n * n;
// };

// // console.log(result(5));

// result(5);

// function greetUser(name) {
//   return `Hello, ${name}!`;
// }

// greetUser("Prabir");

// const greeting = function (name) {
//   console.log(`Hello ${name}`);
// };

// function executeFn(functionAsArgument) {
//   functionAsArgument("pk");
// }
// executeFn(greeting);

// (function square(num) {
//   console.log(num * num);
// })(5);

// (function () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i); // Output: 5, 5, 5, 5, 5
//     }, i * 1000);
//   }
// })();

// (function () {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// })();

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// console.log(x);
// var x = 5;

// greet();

// function greet() {
//   console.log(x);
//   var x = 5;
//   console.log("Hello");
// }

// var x = 15;

// const ft = function greet() {
//   console.log(x);
//   var x = 5;
//   console.log("hello");
// };
// ft();

// fn();

// const fn = function () {
//   console.log(`Hello`);
// };

// fn();

// var x = 21;

// const fb = function () {
//   console.log(x);
//   var x = 5;
// };

// fb();

// const fn = (a, x, y, ...numbers) => {
//   console.log(a, x, y);
// };

// fn(2, 3, 4, 5);

// function multiply(a, b) {
//   console.log(a * b);
// }

// multiply(5, 6);

// const multiply = (a, b) => console.log(a * b);

// multiply(5, 6);

// function fn() {
//   console.log(arguments);
// }

// fn(1, 3, 2);

// const fn = () => {
//   console.log(arguments);
// };

// fn();

let stu = {
  name: "Prabir",
  fn1: () => {
    console.log("This is arrow function" + " " + this.name);
  },
  fn2: function () {
    console.log("This is normal function" + " " + this.name);
  },
};

stu.fn1();
stu.fn2();
