let numbers = [1, 2, 3, 7, 8, 10, 25]
let number = 7;

if (numbers.find(element => element == number)) {
  console.log("7 exist");
} else {
  console.log(`${number} doesn't exist`);
}



let numbers = [1, 2, 3, 7, 8, 10, 25]
let number = 7;
// since es7
if (numbers.includes(number)) {
  console.log("7 exist");
} else {
  console.log(`${number} doesn't exist`);
}