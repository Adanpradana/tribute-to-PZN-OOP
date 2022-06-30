//rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
// rest parameter hanya boleh berada di posisi paling akhir,

// rest parameter adalah fitur dimana kita bisa mengirim data sebanyak2nya
// pada satu parameter, dan secara otomatis akan di konversi menjadi Array

function sum(buah, ...total) {
  let jumlah = 0;
  for (const item of total) {
    jumlah += item;
  }
  console.log(`total buah ${buah} sebanyak ${jumlah} buah`);
}

sum("jeruk", 1, 2, 3, 2, 4, 345, 234, 12, 34);
sum("apel", 12, 3, 2, 1, 2, 3, 44, 3, 1, 33, 1, 2);
sum("timun", 12, 12, 123, 34, 34, 3, 3, 12, 12, 12, 12);

//di dalam rest parameter ada kaitannya berupa spread
// syntax dengan titik tiga di dalam array

const values = [12, 23, 12, 1, 21, 12]; //tipe data array yang akan
// dikonversi menjadi spread rest parameter

sum("mangga", ...values);
