const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";

  let answer = 0;

  if (num1 <= num2) {
    for (num1; num1 <= num2; num1++) {
      answer += num1;
    }
    return answer;
  } else if (num1 > num2) {
    for (num2; num2 <= num1; num2++) {
      answer += num2;
    }
    return answer;
  }
};

console.log(sumAll(-1, 4));

// Do not edit below this line
module.exports = sumAll;
