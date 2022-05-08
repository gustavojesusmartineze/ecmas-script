let arrayT = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// By default it's like calling with depth 1
console.log(arrayT.flat());
console.log(arrayT.flat(2));

let arrayX = [1, 2, 3, [1, 2, 3]];

arrayX.flatMap((element) => { 
  return [element, element * 2]
});


let arr1 = ["it's Sunny in", "", "California"];

let someArr = arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
console.log(someArr);

let someArr2 = arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
console.log(someArr2);


// Trim Start
let trimWord = '                     hello world';
console.log(trimWord);
console.log(trimWord.trimStart());

// TrimEnd
let trimWordX = 'hello world                     ';
console.log(trimWordX);
console.log(trimWordX.trimEnd());


// catch error
try {
  console.log("without error");
  throw new Error('this is a basic error');
} catch (error) {
  console.log(error);
}
