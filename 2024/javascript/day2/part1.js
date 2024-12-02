const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('exercise_input.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let safeReports = 0;

rl.on('line', (line) => {
  let lineNumbers = line.split(' ').map(Number);
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < lineNumbers.length; i++) {
    let curr = lineNumbers[i];
    let prev = lineNumbers[i - 1];
    let diff = curr - prev;

    if (diff < 1 || diff > 3) {
      isIncreasing = false;
    }
    if (diff > -1 || diff < -3) {
      isDecreasing = false;
    }
  }

  if (isIncreasing || isDecreasing) {
    safeReports += 1;
  }
});

rl.on('close', () => {
  console.log(`Number of safe reports: ${safeReports}`);
});