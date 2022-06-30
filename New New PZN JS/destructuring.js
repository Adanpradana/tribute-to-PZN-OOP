//array
"use strict";
const names = ["adam", "adan", "mega", "joko", "pradana", "seftiyani"];
// const [firstNAmes, lastName, ...others] = names;

// console.log(firstNAmes);
// console.log(others);

// //object

{
  //destructuring parameter function,
  const names2 = {
    firstNamee: "adan",
    lastNamee: "pradana",
    hobby: {
      main: "coding",
      jenis: "tidur",
    },
  };

  function showPerson({ firstNamee, lastNamee, hobby: main, jenis }) {
    console.log(jenis);
  }
  showPerson(names2);
}
