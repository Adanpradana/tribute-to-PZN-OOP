// jika index array berupa data lain selain NUMBER
// akan menjadi tipe data Object
// object merupakan tipe data yang hampir sama dengan Array.

// index data di object adalah attribut atau properties
// kebanyakan tipe data obejk adalah "string"
orang = {};
orang["nama"] = "adan pradana";
orang["alamat"] = "poltangan";
orang["umur"] = "28";

console.table(orang);

// penulisan object langsung pada attributnya

const person = {
  "nama lengkap": "adan pradana",
  umur: "30th",
  alamat: "poltangan",
};

console.table(person);
console.log(`nama: ${person["nama lengkap"]}`);
