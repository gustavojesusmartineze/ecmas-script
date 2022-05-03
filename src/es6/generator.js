function* helloGenerator() {
  if (true) {
    yield 'Hello, '
  }

  if (true) {
    yield 'Clarice';
  }
}

const generatorHello = helloGenerator();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());