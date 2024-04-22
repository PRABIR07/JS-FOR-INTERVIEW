# map(), filter() and reduce() in JS

JavaScript provides several powerful array methods that allow you to manipulate arrays in a functional way, making your code more expressive and easier to understand. Among these methods, map(), filter(), and reduce() are particularly useful for transforming, filtering, and aggregating data in arrays. Let's dive into each of these methods with examples to understand how they work and when to use them.

## map()

The map() method creates a new array by applying a function to each element of the original array. It is used when you need to transform each item in an array in some way and produce a new array with the transformed items.

```js
const newArray = originalArray.map((currentValue, index, array) => {
  // Return the new value of the current element
});
```

`Example`:

Suppose you have an array of numbers and you want to create a new array with each number squared:

```js
const numbers = [2, 4, 6, 7, 8];

const result = numbers.map((num) => num * 2);

console.log(result); //[ 4, 8, 12, 14, 16 ]
```

In this example, map() iterates over each number in the numbers array, squares it, and includes the squared number in the new result array.

## filter()

The filter() method in JavaScript helps you pick out certain items from an array that meet a specific condition. Imagine you have a basket of fruits and you only want the ripe ones. Using filter(), you can go through each fruit, check if it's ripe, and if so, put it into a new basket. This new basket will only have the fruits that passed your test - in this case, the ripe ones.

Here's how it works in simple steps:

1. You start with your original array, which could be a list of anything - numbers, names, or objects.
2. You define a condition, or a test, that each item in the array has to pass. This could be anything like "is the number even?" or "does the name start with an 'A'?".
3. filter() goes through each item in the array, checks it against your condition, and if the item passes the test, filter() adds it to a new array.
4. In the end, you get a new array that only contains items that passed your test. The original array remains unchanged.

Syntax:

```js
const newArray = originalArray.filter((currentValue, index, array) => {
  // Return true if the current element should be included in the new array
});
```

For example, if you have an array of numbers and you only want to keep the even ones, you can use filter() like this:

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

In this case, the condition was "is the number even?", and filter() created a new array evenNumbers that only contains the numbers from the original array that are even.

## reduce()

The reduce() method reduces an array of values down to a single value. It executes a reducer function on each element of the array, resulting in a single output value.

Syntax

```js
const result = originalArray.reduce(
  (accumulator, currentValue, index, array) => {
    // Return the new value of the accumulator
  },
  initialValue
);
```

The reduce() method in JavaScript is like a machine that takes a list of items and combines them into one single item. Imagine you have a piggy bank full of coins, and you want to know the total amount of money saved. You would take each coin out, one by one, and keep adding up the value until you've gone through all the coins, and you end up with the total amount.

Here's a simple way to understand how reduce() works:

1. You have an array, which is like a list of items. These could be numbers, objects, or even other arrays.
2. You decide on a rule for how to combine these items. This rule is a function you write that takes two items from the list and combines them into one.
3. reduce() starts with the first item and then goes through the list, applying your rule to combine each item with the result from the previous step.
4. After reduce() has gone through all the items, you're left with just one value. This is the result of combining everything according to your rule.

For example, if you have an array of numbers and you want to add them all up, you can use reduce() like this:

```js
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total); // Output: 15
```

In this example, the rule is "add the current number to the total sum so far". reduce() starts with 0 (because we told it to start counting from 0), and then it adds each number in the array to this starting value, one by one. In the end, you get the total sum of all the numbers.

## Polyfill

A polyfill is like a helper code that lets you use new computer features even on old browsers that don't normally support them. It's like adding a new part to an old car so it can do something it couldn't do before, like connect to Bluetooth. This way, everyone can enjoy the latest features, no matter how old their browser is.

### Polyfill for map()

```js
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
```

1. `Extending Array Prototype: Array.prototype.myMap = function (cb){...}`:

This line adds a new method named myMap to the Array prototype. This is how you extend built-in JavaScript objects to have custom functionality. The cb parameter represents a callback function that you will pass when you call myMap. This callback function is where you define the transformation you want to apply to each element of the array.

2. `Creating a Temporary Array: let temp = [];`:

A new, empty array named temp is created. This array will be used to store the transformed elements of the original array.

3. `Looping Through the Array: for(let i = 0; i < this.length; i++){...}`:

A for loop iterates over each element of the array on which myMap is called. The keyword this refers to the array itself.

4. `Applying the Callback Function: temp.push(cb(this[i], i, this))`:

Inside the loop, the callback function cb is called for each element of the array. It is passed three arguments:

- this[i]: The current element of the array.
- i: The index of the current element.
- this: The entire array.

Whatever the callback function returns is pushed into the temp array. This is how each element of the original array can be transformed.

5. `Returning the Transformed Array: return temp;`

After the loop finishes executing, the temp array, which now contains the transformed elements, is returned.

### Example

Let us take an example how you could use the myMap method:

```js
const number = [2, 3, 4, 5];

let result = number.myMap((num) => num * 2);

console.log(result); // [4,6,8,10]
```

This custom myMap function mimics the behavior of the native Array.prototype.map method, allowing for flexible manipulation of array elements based on the provided callback function.

## Polyfill for filter()

```js
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
```

1. `Adding myFilter to Arrays: Array.prototype.myFilter = function (cb){...}`:

This line adds a new method named myFilter to all arrays. The cb is short for "callback," which is a function that decides whether each item should be in the new array.

2.`Creating a New Array: let temp =[]`:

A new, empty array called temp is made. This is where items that pass the test will go.

3. `Looping Over Each Item: for(let i =0; i<this.length; i++){...}`

This loop goes through each item in the array one by one.

4. `Testing Each Item: if(cb(this[i],i,this))`:

Inside the loop, the callback function cb checks each item (this[i]). If the item passes the test (the function returns true), then the if statement is true.

5. `Adding Items That Pass: temp.push(this[i])`:

When an item passes the test, it gets added to the temp array with push.

6. `Finishing Up: return temp;`

After checking all items, the function finishes by giving back the temp array, which now has only the items that passed the test.

### Example of How to Use myFilter

```js
const numbers = [2, 4, 6, 7, 8, 10];

const result = numbers.myFilter((num) => num > 5);

console.log(result); //[6,7,8,10]
```

## Polyfill for reduce()

```js
//arr.reduce((acc, curr, i,arr)=>{},initialvalue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
```

1. `Adding myReduce to Arrays: Array.prototype.myReduce = function(cb, initialValue){...}`:

This line allows all arrays to use the myReduce method. The cb stands for "callback," which is a function that describes how to combine each element of the array. The initialValue is the starting point for the combination process.

2. `Setting the Starting Point: var accumulator = initialValue;`:
   This creates a variable called accumulator and sets it to the initialValue. The accumulator is where the combined result is stored as myReduce works through the array.

3. `Looping Through the Array: for (var i =0; i< this.length; i++){...}`:

This loop goes through each element in the array one by one.

4. `Combining Elements: accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]`:

Inside the loop, each element of the array is combined into the accumulator using the callback function cb. If accumulator is not undefined (meaning the loop isn't on its first iteration or an initialValue was provided), the callback function is called with the current value of accumulator, the current element this[i], its index i, and the whole array this. If accumulator is undefined (meaning no initialValue was provided and it's the first iteration), the current element this[i] becomes the new accumulator.

5. `Returning the Final Result: return accumulator;`

After going through all the elements, myReduce returns the final combined value stored in accumulator.

### Example of how to use myReduce()

```js
const arr = [1, 2, 3, 4, 5];

const sum = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(sum); //15
```

Q1: Return only name of students in capital

```js
let students = [
{name:"Prabir", age:20, state:"Odisha"},
{name:"Rohit", age:22, state:"Karnatak"},
{name:"Prithvi", age:23, state:"Delhi"},
{name:"Arvind", age:25, state:"Bihar"}

]

let names =[],
for(let i =0; i< students.length; i++){
names.push(students[i].name.toUpperCase())

}

console.log(names) //[ 'PRABIR', 'ROHIT', 'PRITHVI', 'ARVIND' ]

```

```js
//using map

let students = [
  { name: "Prabir", age: 20, state: "Odisha" },
  { name: "Rohit", age: 22, state: "Karnatak" },
  { name: "Prithvi", age: 23, state: "Delhi" },
  { name: "Arvind", age: 25, state: "Bihar" },
];

const names = students.map((stu) => stu.name.toUpperCase());

comsole.log(names); //[ 'PRABIR', 'ROHIT', 'PRITHVI', 'ARVIND' ]
```

Q2: return only details of those whose age is greater than 22

```js
let students = [
  { name: "Prabir", age: 20, state: "Odisha" },
  { name: "Rohit", age: 22, state: "Karnatak" },
  { name: "Prithvi", age: 23, state: "Delhi" },
  { name: "Arvind", age: 25, state: "Bihar" },
];


const details = students.filter((stu)=> stu.age > 22)

console.log(details)
//[
  { name: 'Prithvi', age: 23, state: 'Delhi' },
  { name: 'Arvind', age: 25, state: 'Bihar' }
//]
```

Q3: Sum of ages of all students

```js
let students = [
  { name: "Prabir", age: 20, state: "Odisha" },
  { name: "Rohit", age: 22, state: "Karnatak" },
  { name: "Prithvi", age: 23, state: "Delhi" },
  { name: "Arvind", age: 25, state: "Bihar" },
];

const sum = students.reduce((acc, curr) => acc + curr.age, 0);
console.log(sum); //90
```

Q4: Return only names of the student whose age is greter than 22

```js
let students = [
  { name: "Prabir", age: 20, state: "Odisha" },
  { name: "Rohit", age: 22, state: "Karnatak" },
  { name: "Prithvi", age: 23, state: "Delhi" },
  { name: "Arvind", age: 25, state: "Bihar" },
];

const name = students.filter((stu) => stu.age > 22).map((stu) => stu.name);

console.log(name); //[ 'Prithvi', 'Arvind' ]
```
