function checkSumEquality(enteredNumber) {
    if (enteredNumber.length !== 6) {
        return 'нет';
    }

    const firstThreeDigits = enteredNumber.slice(0, 3).split('').map(Number);
    const secondThreeDigits = enteredNumber.slice(3, 6).split('').map(Number);

    const sumFirstThree = firstThreeDigits.reduce((a, b) => a + b, 0);
    const sumSecondThree = secondThreeDigits.reduce((a, b) => a + b, 0);

    return sumFirstThree === sumSecondThree ? 'да' : 'нет';
}

console.log(checkSumEquality('192471')); 