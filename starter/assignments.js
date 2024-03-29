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

// let percentageOfWorld = (population) => (population / 7900) * 100;

// describePopulation = function(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld(population)} of the world`;
// }

// 3. Call 'describePopulation' with data for 3 countries of your choice

// let china = describePopulation('china', 1441);
// let usa = describePopulation('usa', 375);
// let finland = describePopulation('finland', 6);

// console.log(china);
// console.log(usa);
// console.log(finland);

/////////////////////////////

// Assignment #5
// Lecture: Introduction to Arrays

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

// let populations = [1441, 375, 6, 175];

// 2. Log to the console whether the array has 4 elements or not (true or false)

// console.log(populations.length)

// if(populations.length === 4) {
//   console.log(`true`);
// } else {
//   console.log(`false`)
// }

// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

/////////////////////////////////

// Assignment #6
// Lecture: Basic Array Operations (Methods)

// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

// let neighbours = ['canada', 'mexico'];

// console.log(neighbours);

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array

// neighbours.push('utopia');

// console.log(neighbours);

// 3. Unfortunately, after sometime, the new country is dissolved. So remove it from the end of the array

// neighbours.pop('utopia');

// console.log(neighbours);

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

// neighbours.push('germany');

// console.log(neighbours)

// let isGermanNeighbour = neighbours.includes('germany');
// console.log(isGermanNeighbour);

// if (isGermanNeighbour === true) {
//   console.log("A central European country.");
// } else {
//   console.log('Probably not a central European country.');
// }

// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// neighbours[0] = 'nigeria';

// console.log(neighbours);

////////////////////////////////

// Assignment #7
// Lecture: Introduction to Objects

// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

// myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'english',
//   population: 375,
//   neighbours: ['Canada', 'Mexico']
// }

//////////////////////////////////////

// Assignment #8
// Lecture: Dot vs. Bracket Notation

// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

// myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'english',
//   population: 375,
//   neighbours: ['Canada', 'Mexico']
// }

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

// myCountry.population += 2;

// console.log(myCountry);

// myCountry['population'] -= 2;

// console.log(myCountry);

//////////////////////////////////

// Assignment #9
// Lecture: Object Methods

// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'english',
//   population: 375,
//   neighbours: ['Canada', 'Mexico'],

//   describe: function() {
//     return (`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   }
// }

// 2. Call the 'describe' method

// console.log(myCountry.describe());

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// myCountry = {
//   country: 'USA',
//   capital: 'Washington DC',
//   language: 'english',
//   population: 375,
//   neighbours: ['Canada', 'Mexico'],

//   describe: function() {
//     return (`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   },

  // checkIsland: function() {
  //   this.isIsland = this.neighbours.length === 0;
  //   return this.isIsland;
  // }

//   checkIsland: function() {
//     this.isIsland = (this.neighbours.length === 0) ? true : false;
//     return this.isIsland;
//   }
// }

// console.log(myCountry.checkIsland());
// console.log(myCountry.isIsland);

///////////////////////////////////////

// Assignment #10
// Lecture: Iteration: The for Loop

// 1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// const voters = 50;

// for (index = 1; index <= voters; index++) {
//   console.log(`Voter number ${index} is currently voting.`)
// }

/////////////////////////////////

// Assignment #11
// Lecture: Looping Arrays, Breking and Continuing

// 1. Let's bring back the 'populations' array from a previous assignment

// let populations = [1441, 375, 6, 175];

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// let percentages2 = [];

// for (index = 0; index < populations.length; index++) {
//   percentages2.push(percentageOfWorld1(populations[index]));
// }
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

// console.log(percentages2);
// console.log(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]));

//////////////////////////////////////

// Assignment #12
// Lecture: Looping Backwards and Loops in Loops

// 1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]; 

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country

// for (index = 0; index < listOfNeighbours.length; index++) {
//   console.log(`Nighbor: ${listOfNeighbours[index]}`);
// }

// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// for (index = 0; index < listOfNeighbours.length; index++) {
//   for (let x = 0; x < listOfNeighbours[index].length; x++) {
//     console.log(`Neighbor: ${listOfNeighbours[index][x]}`);
//   }
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---STARTING EXERCISE:${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`)
//   }
// }

/////////////////////////////////

// Assignment #13
// Lecture: The while Loop

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// let populations = [1441, 375, 6, 175];

// const percentages3 = [];
// let index = 0;
// while (index <populations.length) {
//   const percentage = percentageOfWorld1(populations[index]);
//   percentages3.push(percentage);
//   index++;
// }

// console.log(percentages3);

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?
/*
Initially, I preferred the 'while' loop as it makes sense from a logical perspective that a condition should dictate when a loop continues or stops. However, the risk of a condition in a for loop not occuring and an infinite loop being created is not worth the ease from my own limited experience. A for llop has become my defacto loop to utilize due to the safety and piece of mind it affords. I'm sure my views, knowledge and opinons on the topic will continue to fluctuate as I become more educated on software best practices through my studies and career.
*/