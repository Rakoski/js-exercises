const add = function(a, b) {
	return a + b;
};
console.log(add(0, 0))

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sum([1, 2]))

const multiply = function(...args) {
  let product = 1
  for(i = 0; i < args.length; i++) {
    product *= args[i]
  }
  return product
};

const power = function(integer, pow) {
	return integer = integer ** pow
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
