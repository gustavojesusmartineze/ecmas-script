const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World Resolved'), 3000)
      : reject(new Error('test Error'))
  });
}

const helloAsync = async () => {
  const hello = await helloWorld();
  // const helloTwo = await helloWorld();
  console.log(hello);
}

helloAsync();
console.log('Pass #1');


const anotherHello = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherHello();
console.log('Pass #2');