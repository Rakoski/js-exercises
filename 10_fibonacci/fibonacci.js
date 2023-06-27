const fibonacci = function(indice) {
    if(indice >= 0) {
        const arr = Array.from({ length: 1 }, () => 1);
        for(i = 0; i <= indice; i++) {
            const currentValue = arr[i];
            const previousValue = i > 0 ? arr[i - 1] : null;
            arr.push(currentValue + previousValue)
        }
        return arr[indice - 1]
    }
    else {
        return "OOPS"
    }
};
console.log(fibonacci(-4))

// Do not edit below this line
module.exports = fibonacci;
