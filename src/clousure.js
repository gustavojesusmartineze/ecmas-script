const myCounter = ( function() {
  let _counter = 0;

  function increment() {
    return _counter++;
  }

  function decrement() {
    return _counter--;
  }

  function value() {
    return _counter;
  }

  return {
    increment,
    decrement,
    value
  }
})();

console.log(myCounter.value());
myCounter.increment();
console.log(myCounter.value());
myCounter.increment();
console.log(myCounter.value());
myCounter.increment();
console.log(myCounter.value());
myCounter.decrement();
console.log(myCounter.value());

// Emulates the private.
console.log(myCounter._counter);