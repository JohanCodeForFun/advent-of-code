const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const regex = /mul\(\d{1,3},\d{1,3}\)/g;

const matches = input.match(regex);

console.log(matches); // ["mul(2,4)", "mul(11,8)", "mul(8,5)"]

let sum = 0;

// input a function mul()
// multiply the result 2,4 = 8
// add it together for each element (2*4=8 + 11*8=88 + 8*4=40) = 136

function createMultiplier(callback) {
  let product = num1 * num2
  callback(product)
}


function logSum(result) {
  console.log("The product is:", result)
}

createMultiplier(1,2, logSum)
