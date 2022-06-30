function sayHello(name1, name2) {
  console.log(`hello ${name1} ${name2}`);
}
sayHello("adan", "pradana");

// // mengisi variabel di dalam function
// // ini akan mengembalikan nilai "return"

// function myName(name3, name4) {
//   let hasil = `hello ${name3} ${name4} selamat bergabung`;
//   return hasil;
// }
// let clone = myName("adan", "PRadana");
// console.log(clone);

// ----------------------------------------------

function getValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}
const hasilAkhir = getValue(98);
console.log(hasilAkhir);

function finalValue(value) {
  if (value > 90) {
    return "A";
  } else if (value) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const getFinalValue = finalValue(95);
console.log(getFinalValue);

// -----------------------------------------------

function isContains(array, searchValue) {
  for (const element of array) {
    console.log(`iterasi element ${element}`); // loop berhenti disini karena ada return, dan value berhenti di 345
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 345, 345, 45, 43, 45, 45, 45, 34, 232, 23, 23];
const searchValue = 345;
const found = isContains(array, searchValue);
console.log(found);
