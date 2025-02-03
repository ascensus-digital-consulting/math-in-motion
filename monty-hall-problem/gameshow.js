#!/usr/bin/env node

// Clear terminal
console.log('\x1b[2J');

// What can the rooms behind the doors contain?
const contains = {
  dirtyDiaper: 0,
  treasure: 1,
};

// The number of experiments to run
const numberOfExperiments = 5;

// Are we going to switch doors?
const switchDoors = false;

// Put the diapers and treasure behind each of three doors
const doors = [contains.dirtyDiaper, contains.dirtyDiaper, contains.treasure];

let successCount = 0;
let failureCount = 0;

// Run experiments
for (let i = 0; i < numberOfExperiments; i++) {
  let guess = doors[Math.floor(Math.random() * 3)];

  // Remove a diaper from one of the other two doors, if we are running
  // experiments where we're switching doors
  if (switchDoors) {
    guess =
      guess === contains.dirtyDiaper ? contains.treasure : contains.dirtyDiaper;
  }

  // Update the number of guesses that are correct and incorrect
  if (guess === contains.treasure) {
    successCount++;
    console.log('\x1b[42m%s\x1b[0m', 'Found treasure :-)');
  } else {
    failureCount++;
    console.log('\x1b[41m%s\x1b[0m', 'Found dirty diaper :-(');
  }
}

// Summarize results
const chanceOfWinning =
  Math.round((successCount / numberOfExperiments) * 100) / 100;
console.log(
  '\x1b[43m%s\x1b[0m',
  `Successes: ${successCount} : Failures: ${failureCount}`
);
console.log('\x1b[43m%s\x1b[0m', `Chance of treasure: ${chanceOfWinning}`);
