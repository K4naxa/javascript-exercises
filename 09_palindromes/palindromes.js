const palindromes = function (pali) {
  let word = pali;
  word = word.replace(/[^a-zA-Z0-9]/g, "");
  word = word.toLowerCase();

  return word === word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
