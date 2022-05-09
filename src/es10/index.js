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


// Creates an objects from an array of key value elements
let entries = [['name', 'Gustao'], ['age', '30'], ['salary','$75.000']];
console.log(Object.fromEntries(entries));


var a = ['dog', 'cat', 'hen'];
a[100]= 'fox';
console.log(a.length)

class TaxCalculator {
  static calculate(total) {
    return total *.05;
  }
}

let num = TaxCalculator.calculate(50)

const foo1 = {
  bar() {
    console.log('a');
  },
  name: "a",
  age: 20,
}

console.log(foo1);

// #4
class X {
  get Y() { return 42;}
}

var x = new X();
console.log(x.Y)
console.log(x.get('Y'))




// #5
const foo = {
  name: 'Gustavo',

}
console.log(foo);
delete foo.name
console.log(foo);


