// function sebagai "VALUE"
function hello(name) {
  console.log(`hello ${name}`);
}
let say = hello;

hello("adan");
say("pradana");

//function juga bisa dikirim sebagai parameter

let say2 = hello;

function giveMeName(callback) {
  callback("adan");
}

giveMeName(hello); //sebagai parameter callback
giveMeName(say2); //sama saja  givemename(hello)
