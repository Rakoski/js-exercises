const sumAll = function(firstElement, lastElement) {

    const sum = function(array) {
        let soma = 0
        array.forEach(element => {
            soma += element
        });
        return soma
    }

    if (!Number.isInteger(firstElement) || !Number.isInteger(lastElement)) return "ERROR";
    if (firstElement < 0 || lastElement < 0) return "ERROR";
    if(firstElement < lastElement) {
        const toBeSummed = []

        for(c = firstElement; c <= lastElement; c++) {
            toBeSummed.push(firstElement++)
        };
        return sum(toBeSummed)

    } else {
        const toBeSummed = []

        for(c = lastElement; c <= firstElement; c++) {
            toBeSummed.push(lastElement++)
        };
        return sum(toBeSummed)
        };
};

// Do not edit below this line
module.exports = sumAll;
