const { open } = require('node:fs/promises');

const left = [];
const right = [];
let distance = 0;

(async () => {
  const file = await open('sample_input.txt');

  for await (const line of file.readLines()) {
    left.push(parseInt(line[0]))
    right.push(parseInt(line[4]))
  }

  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)

  for (let i = 0; i < left.length; i++) {
    console.log(left[i], right[i])
    if (left[i] > right[i]) {
      distance += left[i] - right[i];
    } else if (left[i] < right[i]) {
      distance += right[i] - left[i];
    } else {
      continue;
    }

    console.log(distance)
  }
})();