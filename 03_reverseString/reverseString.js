const reverseString = function(string) {

    // string[::-1], in Python
    let reverse = string.split("").reverse().join("");
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
