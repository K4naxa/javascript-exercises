const reverseString = function(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse();
    let reversed = reverseArray.join("")
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
