let arrayKosong = [];
arrayKosong.push("adan");
arrayKosong.push("adan", "pradana");
arrayKosong.push("budi", "mega", "namae");

// data di array disimpan berurutan, dimulai dari 0
// urutan disebut "index"

arrayKosong[3] = "siapa"; //untuk mengganti nama array
arrayKosong[2] = "kamu"; //untuk mengganti nama array

delete arrayKosong[1]; //delete array

console.table(arrayKosong); //menampilkan array dengan tabel
console.log(arrayKosong); // menampilkan log di console

arrayKosong[2] = "diubah lagi hehe";
arrayKosong.push("budi", "mega", "namae");

arrayKosong.push("adan lagi");
console.table(arrayKosong);

// array tidak ada batasan data apa
// bisa dimasukkan array di dalam array
arrayKosong.push(["budi", "mega", "namae"]);
arrayKosong.push(["budi", "mega", "namae"]);
console.table(arrayKosong);

// index dari array di JS hanya bisa berupa number
// beda halnya jika PHP bisa tipe data apapun
