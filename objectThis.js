function sample() {
  console.log(this);
  function inner() {
    console.log(this);
  }
  inner();
}

sample();

const person = {
  name: "adan",
  sayHello: function (nameValue) {
    console.log(`hello ${nameValue}, my name is ${this.name}`);
  },
};

person.sayHello("budi");
person.sayHello("lando");
person.sayHello("sina");

//arrow function di obejct method
/* arrow function tidak bisa dignakan ketika
    mengakses arguments object, function generator.
    */

//anonymous function object method
const person2 = {
  name2: "adan",
  sayHello: function (name2) {
    console.log(`hello ${name2}`);
  },
};
person2.sayHello(`budi`);

//arrow function
const person3 = {
  name3: "adan",
  sayHello: (name3) => {
    console.log(`hello ${name3}`);
  },
};
person3.sayHello(`lana`);
