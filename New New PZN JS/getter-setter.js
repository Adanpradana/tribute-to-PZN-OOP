// getter

const person = {
  firstName: "adan",
  lastName: "pradana",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};
person.fullName = "rizka hariz";
console.table(person);
