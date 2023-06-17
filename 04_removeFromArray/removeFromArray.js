const removeFromArray = function(array, ...args) {
    const newArray = [];

    array.forEach(element => {
        if(!args.includes(element)) {
            newArray.push(element)
        };
    });
    return newArray;

    // return array.filter(val => !args.includes(val))
    // outra solução
};

// Do not edit below this line
module.exports = removeFromArray;
