#!/usr/bin/env node

// Clear terminal
console.log('\x1b[2J');

// What can the rooms behind the doors contain?
const contains = {
  diaper: 0,
  treasure: 1,
};

// The number of experiments to run
const numberOfExperiments = 5000000000;

// Are we going to switch doors?
const switchDoors = false;

// Put the diapers and treasure behind each of three doors
const doors = [contains.diaper, contains.diaper, contains.treasure];

let successCount = 0;
let failureCount = 0;
const successColor = '\x1b[42m%s\x1b[0m';
const failureColor = '\x1b[41m%s\x1b[0m';

// Run experiments
for (let i = 0; i < numberOfExperiments; i++) {
  let guess = doors[Math.floor(Math.random() * 3)];

  // Remove a diaper from one of the other two doors, if we are running
  // experiments where we're switching doors
  if (switchDoors) {
    guess = guess === contains.diaper ? contains.treasure : contains.diaper;
  }

  // Update the number of guesses that are correct and incorrect
  if (guess === contains.treasure) {
    successCount++;
    console.log(successColor, 'Found treasure :-)');
  } else {
    failureCount++;
    console.log(failureColor, 'Found diaper :-(');
  }
}

// Summarize results
const chanceOfWinning =
  Math.round((successCount / numberOfExperiments) * 100) / 100;
console.log(
  '\x1b[43m%s\x1b[0m',
  `Successes: ${successCount} : Failures: ${failureCount}`
);
console.log();
const consoleColor = chanceOfWinning > 0.5 ? successColor : failureColor;
console.log(consoleColor, `Chance of treasure: ${chanceOfWinning}`);
