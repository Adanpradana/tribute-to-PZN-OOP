const person = {
  firstName: "Adan",
  lastName: "Pradana",
};

if ("firstName" in person) {
  alert(`hello ${person.firstName}`);
} else {
  alert(`hello`);
}

// in operator hanya mengecek array ada atau tidak
// tidak mengecek "value" nya
