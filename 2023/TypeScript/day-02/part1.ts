import * as fs from 'fs';

const input = fs.readFileSync('input1.txt', 'utf-8');

const inputList = input.split('\n');



type GenericConstraints = string | number;

const returnGenericValue = <T extends GenericConstraints>(value: T): T => {
  return value
}

const returnSingleGenericValue = <T>(value: T): T => {
  return value;
}
returnGenericValue(12)
returnGenericValue(true)
returnSingleGenericValue<string>("hej")!
returnSingleGenericValue<boolean>(true)!


const exampleId = 8;
const cubesCombination = {
  red: 12,
  green: 13,
  blue: 14
}

for (const [index, element] of inputList.entries()) {
  console.log(index, element);
}

for (const line of inputList) {
  // const newLines = line.split("blue");
  // console.log(newLines)
  
}

console.log("-----")
console.log("Result id:", exampleId, "\tCubes combination:", cubesCombination)