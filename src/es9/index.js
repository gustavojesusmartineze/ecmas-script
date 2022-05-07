// 
const objT = {
  name: 'Gustao',
  age: 30,
  country: 'USA'
};

let {name, ...all} = objT;
console.log(name);
console.log(all);


// 
const obj = {
  name: 'Gustao',
  age: 30,
  country: 'USA'
};

const obj2 = {
  ...obj,
  country: 'Netherlands'
};

console.log(obj);
console.log(obj2);
