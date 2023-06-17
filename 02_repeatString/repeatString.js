const repeatString = function(string, num) {
    // works with negative numbers
    if (num < 0) {
        return 'ERROR'
    }
    
    let x = ""
    for(i = 1; i <= num; i++) {
        x += string
    } 
    return x
};

// Do not edit below this line
module.exports = repeatString;
