const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const searchArray = (arrayID, getArray) => {
  for (const element of arrayID) {
    if (element === getArray) {
      return true;
    }
  }
  return false;
};

const result = searchArray(array, 5);
console.log(result);

const hello = (firstname, middlename = "isi value") => {
  console.log(`hello ${firstname} and ${middlename}`);
};

const callHello = hello("adan");
