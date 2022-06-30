ternary operator

const nilai = 80;
let ucapan = "";

if (ucapan >= 75) {
  ucapan = "selamat anda lulus";
} else {
  ucapan = "coba lagi";
}

// -------------------------------

const nilai = 100;
const ucapan = nilai >= 75 ? "Selamat anda lulus " : "coba lagi";

console.log(ucapan);
