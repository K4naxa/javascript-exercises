const add = function (value1, value2) {
  return value1 + value2;
};

const subtract = function (value1, value2) {
  return value1 - value2;
};

const sum = function (array) {
  let value = 0;
  for (num of array) {
    value += num;
  }
  return value;
};

const multiply = function (array) {
  let value = 0;
  for (num of array) {
    if (value === 0) {
      value += num;
    } else value *= num;
  }
  return value;
};

const power = function (value1, value2) {
  return value1 ** value2;
};

const factorial = function (value) {
  let vastaus = 1;
  if (value === 0) return 1;
  else {
    for (let i = value; i <= 1; i--) {
      vastaus *= i;
    }
    return vastaus;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
