const nilaiUjian = 75;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 70;

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);

const name = "adan pradana";

const firstName = " adan";
const lastName = "pradana";
const middleName = "rizka";
const template = `name: ${name} ${firstName} ${lastName} ${middleName}`;
console.log(template);
