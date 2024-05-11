/*
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

// Your code here 

function isPrime(number) {
  if (number === 1 || number === 0) return false;
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = isPrime;
  } catch (e) {
    module.exports = null;
  }