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

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => { resolve('Resolved yeeeeei') }, 3500)
      : reject('Rejected, sad')
  });
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally( () => console.log('This is the end of the execution'));

console.log('this is called first');