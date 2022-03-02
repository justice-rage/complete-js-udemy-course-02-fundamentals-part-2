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

// const friend1 = 'Michael';
// const firend2 = 'Steven';
// const firend3 = 'Peter';

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0])
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // can mutate arrays, but can't completely change them
// const firstName = 'justice'
// const justice = [firstName, 'pelteir', 2037 - 1995, 'teacher', friends];
// console.log(justice);
// console.log(justice.length);

// // Array Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Lecture 40: Basic Array Operations (Methods)

// const friends = [`Michael`, `Steven`, `Peter`];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// // Remove elements
// friends.pop(); // removes last element
// const popped = friends.pop(); // removes last element
// console.log(popped);
// console.log(friends);

// friends.shift(friends); // removes first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log(`You have a friend named Steven.`);
// }

// Lecture 42: Introduction to Objects

// const justice = {
//   firstName: 'justice',
//   lastName: 'pelteir',
//   age: 2022 - 1995,
//   job: 'teacher',
//   friends: ['michael', 'peter', 'john']
// };

// Lecture 43: Dot vs. Bracket Notation

// const justice = {
//   firstName: 'justice',
//   lastName: 'pelteir',
//   age: 2022 - 1995,
//   job: 'teacher',
//   friends: ['michael', 'peter', 'john']
// };

// console.log(justice);

// console.log(justice.lastName);
// console.log(justice['lastName']);

// const nameKey = 'Name';
// console.log(justice['first' + nameKey]);
// console.log(justice['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Justice? Choose between firstName, lastName, age, job and friends.');
// console.log(justice[interestedIn]);

// if(justice[interestedIn]) {
//   console.log(justice[interestedIn]);
// } else {
//   console.log('Wrong request. Choose between firstName, lastName, age, job and friends.')
// }

// justice.location = 'usa';
// justice['twitter'] = '@justicepelteir';
// console.log(justice);

//  challenge
// "Justice has three friends, and his best friend is Michael"
// console.log(`${justice.firstName} has ${justice.friends.length} friends, and his best friend is ${justice.friends[0]}.`);

// Lecture 44: Object Methods

// const justice = {
//   firstName: 'justice',
//   lastName: 'pelteir',
//   birthYear: 1995,
//   job: 'teacher',
//   friends: ['michael', 'peter', 'john'],
//   hasDriversLicense: true,

//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function() {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//   }
// };

// console.log(justice.calcAge());

// console.log(justice.age);
// console.log(justice.age);
// console.log(justice.age);

// // Challenge
// // "Justice is a 42-year old teacher, and he has a drivers license."
// console.log(justice.getSummary());

// Lecture 46: Iteration: The for loop

// console.log(`Lifting weights repetition 1 🏋️‍♂️`);

// for loop keeps running while condition is true
for(let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}