//anonymous function
let say = function (nama) {
  console.log(`hello ${nama}`);
};

say("adan");
say("pradana");

//variable anon function

const sayMe = function (callback) {
  callback("adan");
};

sayMe(say);

sayMe(function (nama) {
  console.log(`hello ${nama}`);
});
sayMe(function (nama) {
  console.log(`hello ${nama}`);
});
sayMe(function (nama) {
  console.log(`hello ${nama}`);
});
