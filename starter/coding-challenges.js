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