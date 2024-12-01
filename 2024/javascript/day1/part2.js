const { open } = require('node:fs/promises');

const leftArray = [];
const rightArray = [];
const leftCounter = {};
const rightCounter = {};
let similarityScore = 0;

(async () => {
  const file = await open('sample_input.txt');

  for await (const line of file.readLines()) {
    const [left, right] = line.trim().split(/\s+/).map(Number);

    leftArray.push(left)
    rightArray.push(right)

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
  
  console.log(leftCounter, rightCounter)

  console.log(leftArray, rightArray)

  leftArray.forEach((num => {
    // console.log(num, leftCounter[num], rightCounter[num])
    if (Number(leftCounter[num]) && Number(rightCounter[num])) {
      console.log(num, rightCounter[num])
      similarityScore += num * rightCounter[num]
    }
    // if (num === rightArray[num]) {
    //   similarityScore += num * rightCounter[num];
    //   console.log("pow:", num, rightArray[num], rightCounter[num], similarityScore)
    // } else {
    //   console.log("noo:", num, rightArray[num])
    // }

  }))
  console.log(similarityScore)
})();