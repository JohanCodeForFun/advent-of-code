const { open } = require('node:fs/promises');

const left = [];
const right = [];
let distance = 0;

(async () => {
  const file = await open('exercise_input.txt');

  for await (const line of file.readLines()) {
    const [leftLine, rightLine] = line.split('   ')

    left.push(parseInt(leftLine))
    right.push(parseInt(rightLine))
  }

  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  for (let i = 0; i < left.length; i++) {
    if (left[i] > right[i]) {
      distance += left[i] - right[i];
    } else if (left[i] < right[i]) {
      distance += right[i] - left[i];
    } else {
      continue;
    }
    
  }

  console.log(distance)

  return distance;
})();