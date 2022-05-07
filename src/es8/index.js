const data = {
  frontend: 'Oscar',
  backend: 'Gustavo',
  design: 'Ana',
  marketing: ['Heliana', 'Mariana', 'Abril']
};

const entries = Object.entries(data);
// console.log(entries);

const entriesCount = Object.entries(data).length;
// console.log(entriesCount);


// Returns an array with the values of the object.
let arrayValues = Object.values(data);
console.log(arrayValues);


// Pad a string at the start or end of the string.
const str1 = '5';

console.log(str1.padStart(3, '0'));
console.log(str1.padEnd(3, '0'));


// Trailing comas
const obj = {
  name: 'Oscar',
}


const object1 = {
  a: 'somestring',
  b: 42
};

let b = Object.entries(object1);
console.log(b);