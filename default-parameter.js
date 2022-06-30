// parameter dr javascript optional.
//parameter akan dikirim secara default jika kita tidak mengisi parameter

function register(name, gender = "UNKNOWN") {
  console.log(name);
  console.log(gender);
}
register();
register("Adan");
register("adan", "male");
register("adan", undefined); // undifined tidak ada valuenya maka akan mengembalikan nilai default
register("adan", null); // hasil tetap null karena dianggap string kosong
