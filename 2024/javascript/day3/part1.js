const fs = require("fs");
const readline = require("readline");
const fileStream = fs.createReadStream("exercise_input.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let input = "";

rl.on("line", (line) => {
  input += line;
});

rl.on("close", () => {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;

  const matches = input.match(regex);

  console.log(matches); // ["mul(2,4)", "mul(11,8)", "mul(8,5)"]

  function processMatches(matches) {
    return matches.map((match) => {
      const numbers = match.match(/\d+/g).map(Number);
      return numbers[0] * numbers[1];
    });
  }

  const products = processMatches(matches);

  console.log(products); // [8, 88, 40]

  const sum = products.reduce((acc, sum) => acc + sum, 0);

  console.log(sum);
});
