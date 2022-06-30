function sayHello(name, lastname) {
  console.log(`hello ${name} you have last name ${lastname}`);
}

const say = sayHello;
sayHello("adan", "pradana");
say("mega", "seftiyani");


const anon = function (name, score)