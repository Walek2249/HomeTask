const num1=1000;
const res1=50;

function divideUntilLess(n) {
    let num = 0;
    while (n >= res1) {
        n /= 2;
        num++;
    }
    return { result: n, iterations: num };
}

const resultObject = divideUntilLess(num1);
console.log(`Результат: ${resultObject.result}`);
console.log(`Кол-во итераций: ${resultObject.iterations}`);