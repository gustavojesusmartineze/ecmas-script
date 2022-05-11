// arrow functions:
const functionName = () => "hola";
console.log(functionName());

// object Destructuring
const square = {
  x: 10,
  y: 10,
}

function calcArea(square) {
  const {x,y} = square;
  return x * y;
}

// The parameters needs to be the same name of the object properties.
function calcArea2({x,y}) {
  return x * y;
}

console.log(calcArea(square));
console.log(calcArea2(square));


// spread operator on array
let arrayOne = [1, 2, 3, 4];
let arrayTwo = [5, 6, 7, 8, 9];
let newArray = [...arrayOne, ...arrayTwo];
console.log(newArray);


// spread operator on objects
let object1 = {
  name: 'Gustavo',
  age: 30,
  salary: '$5.500'
}
let object2 = {
  lastName: 'Martinez',
  city: 'Valencia',
  company: 'USA',
  salary: '$6.000'
}

let gustavo = {
  ...object1,
  ...object2,
  salary: '$7.500'
}

console.log(gustavo);

// Ternary operator
const car = {
  brand: 'Tesla',
  model: 'Y',
}

let model = car.model ? car.model : 'X';
console.log(model);


// Nullish coalescing operator (??)
function sum(a, b) {
  a = a ?? 0;
  b = b ?? 0;

  return a + b;
}

let sumRes = sum(3, 2);
console.log(sumRes);

