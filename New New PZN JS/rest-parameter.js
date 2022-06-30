function sum(fruits, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }

  console.log(`total ${fruits} ada sebanyak ${total} buah`);
}

sum("banana", 12, 2, 23, 3, 4, 12, 34, 4, 12, 3, 1123);
sum("orange", 12, 1, 2, 23, 322, 4, 12, 34, 4, 12, 3, 1123);
sum("grape", 12, 2, 23, 3, 5, 6, 7, 78, 3, 411, 12, 34, 4, 12, 3, 1123);

// rest parameter digunakan ketika banyak data dan data dikembalikan berupa array

//spread syntax

const test = [10, 10, 10, 10];
const summmm = sum("test", test);
console.log(summmm);
// test array dibaca nested array pertama, maka tidak dapat langsung dijumlahkan

const spreadParams = [5, 5, 5, 5, 5, 5, 5, 5];
sum("TESTT SPREAD", ...spreadParams);
