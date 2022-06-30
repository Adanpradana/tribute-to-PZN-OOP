function sayHello(name) {
  console.log(`hello ${name} `);
}
sayHello("adan");
// anonymous function yang dimasukkan didalam variabel

const anon = (lastname) => {
  console.log(`adan have lastname: ${lastname}`);
}; //adan have lastname: adan

anon("pradana 1");
// callback
function getAnon(callback) {
  callback("pradana in callback");
}

//memanggil function biasa
getAnon(anon);

// function in parameter
// intinya kita manggil parameter function getAnon

// this is paaram value
getAnon(function (getNewName) {
  console.log(`hello ${getNewName} this is funcion in params`);
});
