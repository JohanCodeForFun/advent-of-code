const { open } = require("node:fs/promises");

const leftArray = [];
const rightArray = [];
const leftCounter = {};
const rightCounter = {};
let similarityScore = 0;

(async () => {
  const file = await open("exercise_input.txt");
  const pattern = /^(\d{5})\s+(\d{5})$/;

  for await (const line of file.readLines()) {
    const [left, right] = line.trim().split(/\s+/).map(Number);

    const match = line.match(pattern);

    if (match) {
      leftArray.push(match[1]);
      rightArray.push(match[2]);
    }

    if (leftCounter[left]) {
      leftCounter[left]++;
    } else {
      leftCounter[left] = 1;
    }

    if (rightCounter[right]) {
      rightCounter[right]++;
    } else {
      rightCounter[right] = 1;
    }
  }

  leftArray.forEach((num) => {
    if (Number(leftCounter[num]) && Number(rightCounter[num])) {
      similarityScore += num * rightCounter[num];
    }
  });
  
  console.log(similarityScore);
})();
