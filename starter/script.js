'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive.`);

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function logger() {
//   console.log(`My name is Justice.`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// Lecture: Function Declarations vs Expressions

// Function declaration
// const age1 = calcAge1(1991); // works

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // Function expression
// const age2 = calcAge2(1991); // doesn't work

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// console.log(age1, age2);

// Lecture 35: Arrow functions

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Justice'));
console.log(yearsUntilRetirement(1980, 'Bob'));