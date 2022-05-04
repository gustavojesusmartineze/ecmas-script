// Functions default parameters.
// Old way.
function newFunction(name, age, country) {
  var name = name || 'default';
  var age = age || 30;
  var country = country || 'USA';

  console.log(name, age, country);
}
newFunction('Gustavo')

// es6
function newFunctionem6(name = 'oscar', age = 32, country = 'USA') {
  console.log(name, age, country);
}

newFunctionem6()
newFunctionem6('Gustavo', 30)
newFunctionem6('Gustavo', 31, 'USA')



// Template literals
let hello = 'Hello';
let world = 'World';
let epicPrase = hello + ' ' + world;

console.log(epicPrase);

let helloWorld = `${hello} ${world}`;
console.log(helloWorld);


let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
  + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

console.log(lorem);

// Using template literals
let loremWithTemplateLiterals = `This is some good frase with a separation
between the lines.`;

console.log(loremWithTemplateLiterals);


// Destructuring assignment.
let person = {
  'name': 'Gustavo',
  'age': 30,
  'country': 'USA'
}

// Usual way to access the properties of the object.
// console.log(person.name, person.age, person.country);

// This is the use of the spread operator:
let {name, age, country} = person;

// You can do it only with some of the properties of the object.
let {name, age} = person;

console.log(name, age, country);

let { name: nameAlias } = person;
// Can be accessed by te nameAlias always.
console.log(name);
console.log(nameAlias);



// Object destructuring of nested properties:
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham',
    state: 'Carabobo'
  }
};

let { address: {city} } = hero;
let { address: {state} } = hero;

// Can be done this way too.
// let { address: {city}, address: {state} } = hero;

console.log(city);
console.log(state);

// Object destructuring of nested properties:
const inception = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham',
    state: 'Carabobo'
  },
  department: {
    owner: {
      name: 'Gustavo',
      salary: '$7.000 month',
    },
    address: {
      city: 'Manongo',
      state: 'Carabobo'
    }
  }
};

let { department: {owner: {name} } } = inception;
let { department: {address: {city} } } = inception;

console.log(`Inception Owner Name: ${name}, and lives ${city}`);

// Can be done this way too.
// let { address: {city}, address: {state} } = hero;
console.log(city);
console.log(state);



// Array destructuring.
let a, b, rest;
[a, b] = [10, 20, 30, 40, 50];

console.log(a);
// expected output: 10


// Spread operator
let team1 = ['Gustavo', 'Jannet', 'Pablo', 'Jeannell']
let team2 = ['Valeria', 'Yesica', 'Camila', 'Andrea']

let [gustavo , jannet, ...rest] = [...team1];
let education = ['David', ...team1, ...team2];

console.log(gustavo);
console.log(jannet);
console.log(rest);
console.log(education);

// Destructuring assignment.
let person = {
  'name': 'Gustavo',
  'age': 30,
  'country': 'USA'
}

let gustavo = {...person};

console.log(gustavo);



// Declaring objects.
let name = 'Gustavo';
let age = 30;

// es5
let es5object = { 'name': name, 'age': age };
console.log(es5object);

// es6
let es6object = { name, age };
console.log(es6object);


// es5
const names = [
  { name: 'Gustavo', age: 30 },
  { name: 'Nestor', age: 24 },
  { name: 'Joel', age: 20 }
]

// es5 Arrow function.
names.map( function (element) {
  console.log(`Name: ${element.name}, Age: ${element.age}`)
});

// es6 Arrow function.
console.log('This is with es6');
names.map( element => {
  console.log(`Name: ${element.name}, Age: ${element.age}`)
});

// es6 Arrow function of only one parameter.
const square = num => num * num;
console.log(square(5));


// Promises:
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Resolved Hey!!');
    } else {
      reject('Rejected Ups!!')
    }
  });
} 

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hello then in between'))
  .catch(error => console.log(error));


