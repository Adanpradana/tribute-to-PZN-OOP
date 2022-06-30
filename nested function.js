function outer() {
  function inner() {
    console.log("inner");
  }

  inner();
  inner();
}
outer();

// scope
// gobal & local

//global scope
let counter = 0;
function hitMe() {
  counter++;
}
hitMe();
hitMe();
console.log(counter);

//local scope

function first() {
  let variablePertama = "first";

  function firstNested() {
    console.log(variableNested);
    const firstNested = "first Nested";
    firstNested();
  }
  console.log(variableNested);
}

function second() {
  let variableKedua = "second";
}
variablePertama();
variableKedua();

//global dan tidak bsa di akses di lokal
console.log(variablePertama); //error
console.log(variableKedua); //error

// nested function scope
