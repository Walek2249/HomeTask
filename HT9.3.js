function findArithmeticMean(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const arithmeticMean = sum / arr.length;
    return arithmeticMean;
}

const arr = [12, 15, 20, 25, 59, 79];
console.log( `${findArithmeticMean(arr)}`);