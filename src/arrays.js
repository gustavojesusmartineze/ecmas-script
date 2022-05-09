let numbers = [1, 2, 3, 7, 8, 10, 25];

let result = numbers.reduce((total, currentValue) => {
  return total + currentValue;
});

console.log(result);

let result2 = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 4);
console.log(result2);
