import * as fs from 'fs';

const input = fs.readFileSync('input2.txt', 'utf-8');

const inputList = input.split('\n');
const twoDigitList: any = [];

const lookupNumberLetters: any = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9"
};

for (const line of inputList) {

  const lineList = line.split("");
  const matches: RegExpMatchArray | null = line.match( /one|two|three|four|five|six|seven|eight|nine/g );

  let firstNumber: any;
  let lastNumber: any;

  if (parseInt(line[0])) {
    firstNumber = line[0];
  } else if (matches !== null) {
    firstNumber = matches[0];
    firstNumber = lookupNumberLetters[firstNumber]
  }

  if (parseInt(line[line.length - 1])) {
    lastNumber = line[line.length - 1];
  } else if (matches !== null) {
    if (matches[1]) {
      lastNumber = matches[1];
      lastNumber = lookupNumberLetters[lastNumber]
    } else {
      lastNumber = matches[0];
      lastNumber = lookupNumberLetters[lastNumber]
    }
  }

  console.log("line:", line, " Numbers:", [firstNumber, lastNumber])

  let twoDigitNumber = parseInt(firstNumber + lastNumber);

  twoDigitList.push([twoDigitNumber])

  const sumOfTwoDigitList = twoDigitList.reduce(
    (acc: number, currentValue: number[]) => acc + currentValue[0], 0
  )

  console.log("result:", sumOfTwoDigitList)  
}

console.log("Result 281, from: calibration values are 29, 83, 13, 24, 42, 14, and 76.")