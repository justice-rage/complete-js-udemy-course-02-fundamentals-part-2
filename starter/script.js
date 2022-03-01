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
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Justice'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// Lecture 36: Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
//   }

//   console.log(fruitProcessor(2, 3));

// Lecture 37: Reviewing Functions

// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`)
//     return -1;
//   }

//   // return retirement;
//   // return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1991, 'Justice'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// Lecture: Introduction to Arrays

const friend1 = 'Michael';
const firend2 = 'Steven';
const firend3 = 'Peter';

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// can mutate arrays, but can't completely change them
const firstName = 'justice'
const justice = [firstName, 'pelteir', 2037 - 1995, 'teacher', friends];
console.log(justice);
console.log(justice.length);

// Array Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);