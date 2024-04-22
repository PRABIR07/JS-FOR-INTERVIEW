const number = [2, 4, 6, 7, 8];

// const result = number.myMap((num) => num * 2);

// console.log(result);

//Polyfill for map()
//Array.map((num,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// const numbers = [2, 4, 6, 7, 8];

// // const result1 = numbers.myMap((num) => num * 2);

// // console.log(result1);

// const ft = numbers.filter((num) => num > 5);

// console.log(ft);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const numbers = [2, 4, 6, 7, 8, 10];

const result = numbers.myFilter((num) => num > 5);

console.log(result); //[6,7,8,10]

//polyfill for reduce()

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5];

const sum = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(sum);

let students = [
  { name: "Prabir", age: 20, state: "Odisha" },
  { name: "Rohit", age: 22, state: "Karnatak" },
  { name: "Prithvi", age: 23, state: "Delhi" },
  { name: "Arvind", age: 25, state: "Bihar" },
];

// let name = [];

// for (let i = 0; i < students.length; i++) {
//   name.push(students[i].name.toUpperCase());
// }

// const name = students.map((stu) => stu.name.toUpperCase());

// console.log(name);

// const names = students.filter((stu) => stu.age > 22);

// console.log(names);

// const sum1 = students.reduce((acc, curr) => acc + curr.age, 0);
// console.log(sum1);

const name = students.filter((stu) => stu.age > 22).map((stu) => stu.name);

console.log(name);
