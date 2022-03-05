`use strict`;

// Assignment #1
// Lecture: Functions

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// describeCountry = function(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// 2. Call this function 3 times, with input data for 3 different countries.Store the returned values in 3 different variables, and log them to the console

// let usa = describeCountry('United States of America', 375, 'Washington D.C.');
// let finland = describeCountry('Finland', 6, 'Helsinki');
// let mexico = describeCountry('Mexico', 128, 'Mexico City')


// console.log(usa);
// console.log(finland);
// console.log(mexico);

////////////////////////////////////

// Assignment #2
// Lecture: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

// function percentageOfWorld1(population) {}

// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

// let china = percentageOfWorld1(1441);
// let usa = percentageOfWorld1(375);
// let finland = percentageOfWorld1(6);

// console.log(`China: ${china}`);
// console.log(`USA: ${usa}`);
// console.log(`Finland: ${finland}`);

// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// percentageOfWorld2 = function(population) {
//   return (population / 7900) * 100
// }

// let china2 = percentageOfWorld2(1441);
// let usa2 = percentageOfWorld2(375);
// let finland2 = percentageOfWorld2(6);

// console.log(`China2: ${china2}`);
// console.log(`USA2: ${usa2}`);
// console.log(`Finland2: ${finland2}`);

////////////////////////////////////////

// Assignment #3
// Lecture: Arrow Functions

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// let percentageOfWorld3 = (population) => (population / 7900) * 100;

// let china3 = percentageOfWorld3(1441);
// let usa3 = percentageOfWorld3(375);
// let finland3 = percentageOfWorld3(6);

// console.log(`China3: ${china3}`);
// console.log(`USA3: ${usa3}`);
// console.log(`Finland3: ${finland3}`);

/////////////////////////////////////////

// Assignment #4
// Lecture: Functions Calling Other Functions

// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

// describePopulation = function(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world`;
// }

// 2. To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier

let percentageOfWorld = (population) => (population / 7900) * 100;

describePopulation = function(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world`;
}

// 3. Call 'describePopulation' with data for 3 countries of your choice

let china = describePopulation('china', 1441);
let usa = describePopulation('usa', 375);
let finland = describePopulation('finland', 6);

console.log(china);
console.log(usa);
console.log(finland);