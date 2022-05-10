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
