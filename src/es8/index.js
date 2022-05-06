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

