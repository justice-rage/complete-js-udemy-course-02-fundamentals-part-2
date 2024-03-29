`use strict`;

// Coding Challenge: #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the funtion to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('averageDolphins' and 'averageKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

Test Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.
*/

// Step 1
// const calculateAverage = (a, b, c) => (a + b + c) / 3;

// // Step 2

// // Data Set 1
// const dolphinsAverage1 = calculateAverage(44, 23, 71);
// const koalasAverage1 = calculateAverage(65, 54, 49);

// // Data Set 2
// const dolphinsAverage2 = calculateAverage(85, 54, 41);
// const koalasAverage2 = calculateAverage(23, 34, 27);

// // Step 3

// const checkWinner = function (dolphinsScore, koalasScore) {

//   if (dolphinsScore >= 2 * koalasScore) {
//     console.log(`Dolphins win with a score of ${dolphinsScore}.`);
//   } else if (koalasScore >= 2 * dolphinsScore) {
//     console.log(`Koalas win with a score of ${koalasScore}.`)
//   } else {
//     console.log(`No winners.`);
//   }
// }

// checkWinner(dolphinsAverage1, koalasAverage1); // Data Set 1
// checkWinner(dolphinsAverage2, koalasAverage2); // Data Set 2

////////////////////////////////////////

// Coding Challenge: #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. Bonus: Create an array 'total' containing the total values, so the bill + tip.

Test Data: 125, 555 and 44
*/

// const calculateTip = function(bill) {
//   let tip;

//   if(bill >= 50 && bill <= 300) {
//     tip = bill * .15;
//   } else {
//     tip = bill * .2;
//   }  return tip;
// }

// const bills = [125, 555, 44];
// let tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
// let total = [bills[0] + calculateTip(bills[0]), bills[1] + calculateTip(bills[1]), bills[2] + calculateTip(bills[2])];

// console.log(bills);
// console.log(tips);
// console.log(total);

////////////////////////////////////

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

// const mark = {
//   firstName: 'mark',
//   lastName: 'miller',
//   mass: 78,
//   height: 1.69,

//   fullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   calculateBMI: function() {
//     let bmi = 0;
//     this.bmi = (this.mass / this.height ** 2);
//     return this.bmi;
//   }
// };

// const john = {
//   firstName: 'john',
//   lastName: 'smith',
//   mass: 92,
//   height: 1.95,

//   fullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   calculateBMI: function() {
//     let bmi = 0;
//     this.bmi = (this.mass / this.height ** 2);
//     return bmi;
//   }
// };

// if(mark.calculateBMI() > john.calculateBMI()) {
//   console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi}).`)
// } else {
//   console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi}).`)
// }

// console.log(mark.bmi, john.bmi);

///////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test values
2. Create an empty array for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and the total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals array.

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all the values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together.
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
*/

// const calculateTip = function(bill) {
//   let tip;

//   if(bill >= 50 && bill <= 300) {
//     tip = bill * .15;
//   } else {
//     tip = bill * .2;
//   }  return tip;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let index = 0; index < bills.length; index++) {
//   const tip = calculateTip(bills[index]);
//   const bill = bills[index];
//   tips.push(tip)
//   const total = tip + bill;
//   totals.push(total);
//   console.log(`Bill: $${bill}
// Tip: $${tip}
// Total: $${total}`);
// }

// const calculateAverage = function(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     // sum = sum + arr[index];
//     sum += arr[index];
//   }
//   return sum / arr.length;
// }
// // console.log(calculateAverage([2,3,7]));
// console.log(calculateAverage(totals));
// console.log(calculateAverage(tips));