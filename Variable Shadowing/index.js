//Example-1

//Variable declare in Global Scope
let animal = "Cat";

function getName() {
  //Variable declare in function Scope
  let animal = "Dog";
  console.log(animal);
}

getName();
console.log(animal);

//Example-2:

//Variable declare in Global scope
let count = 10;

//variable declare in block scope
for (let count = 0; count < 5; count++) {
  console.log(`Current count: ${count}`);
}

console.log(count);

//Example-3

var x = "Prabir";

if (true) {
  var x = "kumar";
  console.log(x);
}

console.log(x);

//Example-4

//Variable declare in Global Scope
var animal1 = "Cat";

function getName() {
  //Variable declare in function Scope
  var animal1 = "Dog";
  console.log(animal1);
}

getName();
console.log(animal1);

//Example-5

//Variable declare in Global scope
var count1 = 10;

//variable declare in block scope
for (var count1 = 0; count1 < 5; count1++) {
  console.log(`Current count: ${count1}`);
}

console.log(count1);


