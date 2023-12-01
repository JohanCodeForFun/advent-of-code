import * as fs from 'fs';

const input = fs.readFileSync('input1.txt', 'utf-8');

const inputList = input.split('\n');
const twoDigitList: any = [];

for (const line of inputList) {
  const lineList = line.split("");

  let firstNumber: any;
  let lastNumber: any;

  lineList.map(x => {
    if (parseInt(x)) {
      
      if (firstNumber === undefined) {
        firstNumber = x;
      }

      lastNumber = x;

      console.log("first number:", firstNumber, "last number:", lastNumber)
    }
  })

  let twoDigitNumber = parseInt(firstNumber + lastNumber);

  twoDigitList.push([twoDigitNumber])

  console.log("two digit list:", twoDigitList)

  const sumOfTwoDigitList = twoDigitList.reduce(
    (acc: number, currentValue: number[]) => acc + currentValue[0], 0
  )

  console.log("result:", sumOfTwoDigitList)
}