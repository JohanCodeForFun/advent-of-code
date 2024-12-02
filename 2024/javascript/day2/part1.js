const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('sample_input.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let lineNumbers;
let safeReports = 0;
let positive;
let negative;

console.log(fileStream)


rl.on('line', (line) => {
  lineNumbers = line.split(' ')

  for (let i = 1; i < lineNumbers.length; i++) {
    let prev = parseInt(lineNumbers[i - 1]);
    let curr = parseInt(lineNumbers[i]);

    for (let j = 0; j < lineNumbers.length; j++) {
      let counter = 1;

      if ((prev > curr && prev - curr === 2) ||
        (prev > curr && prev - curr === 1) ||
        (prev > curr && prev - curr === 0)) {
          counter++;
          console.log("counter:", counter)
        } else {
          console.log("break positive")
          break;
        }
        
        if (counter === lineNumbers.length) {
        console.log("----- positive -----")
        positive = true;
      }
    }

    for (let k = 0; k < lineNumbers.length; k++) {
      if (prev < curr) {
        negative = false;
      } else {
        console.log("break negative")
        break;
      }
    }
  }

    // console.log("positive:", positive)
    // console.log("negative:", negative)

    
    // console.log(prev, curr)
  if (positive) {
    console.log("true") 
    safeReports += 1; 
  } else if (!negative) {
    console.log("false")
  }
  // console.log("pow", lineNumbers)
  console.log("safe reports:", safeReports)
});


rl.on('close', () => {
  console.log('File reading completed.');
});