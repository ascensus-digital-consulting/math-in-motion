#!/usr/bin/env node

const contains = {
  dirtyDiaper: 0,
  treasure: 1,
};

// The number of experiments to run
const numberOfExperiments = 10000;

// Are we goin g ot switch doors?
const switchDoors = false;

// Put the diapers and treasure behind each of three doors
const doors = [contains.dirtyDiaper, contains.dirtyDiaper, contains.treasure];

let successCount = 0;
let failureCount = 0;

// Run experiments
for (let i = 0; i < numberOfExperiments; i++) {
  let guess = doors[Math.floor(Math.random() * 3)];

  // Remove a diaper from one of the other two doors
  const newDoors = [contains.dirtyDiaper, contains.treasure];
  if (switchDoors) {
    guess = newDoors[Math.floor(Math.random() * 2)];
  }

  if (guess === contains.treasure) {
    successCount++;
    console.log('\x1b[42m%s\x1b[0m', 'Found treasure!');
  } else {
    failureCount++;
    console.log('\x1b[41m%s\x1b[0m', 'Found dirty diaper!');
  }
}

// Summarize results
const chanceOfWinning =
  Math.round((successCount / numberOfExperiments) * 100) / 100;
console.log(`Successes: ${successCount} : Failures: ${failureCount}`);
console.log(`Chance of treasure: ${chanceOfWinning}`);
