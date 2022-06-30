const name = "adan pradana";
const firstName = " adan";
const lastName = "pradana";
const middleName = "rizka";
const nilai = "80";
const template = `name: ${name} ${firstName} ${lastName} ${middleName}`;
console.log(template);
// penggunaan string template juga bisa menambahkan substitusi
// contohnya :
// penggunaan string template juga bisa menggunakan "multiline - string"
// dengan cara hanya menambahkan enter di dalam backtick tersebut
const template2 = `name : ${name} 
lulus : ${nilai > 70}`;
console.log(template2);
