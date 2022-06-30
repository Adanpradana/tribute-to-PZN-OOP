function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(`this is inner bro ${counter}`);
  }
  inner();
}

const result = outer();
