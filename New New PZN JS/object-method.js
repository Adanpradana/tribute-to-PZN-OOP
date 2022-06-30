const person = {
  name: "adan",
  say: (param) => {
    console.log(`hello ${param} mu name is ${this.name}`);
  },
};
person.say(`pradana`);
