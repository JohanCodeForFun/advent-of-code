const fs = require("fs");
const readline = require("readline");
const fileStream = fs.createReadStream("sample_input.txt");

/* 
find XMAS,
  horizontal, 
  vertical, 
  diagonal, 
  written backwards, 
  overlapping other words
*/

const regex = /XMAS/g;

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let input = "";
let xmasCount = 0;

rl.on("line", (line) => {
  console.log(line.search(regex));
  
  if (line.search(regex) !== -1) {
    console.log("pow!", line.search(regex))
    xmasCount++
  }
});

rl.on("close", () => {
  console.log("xmas count:", xmasCount)
});
