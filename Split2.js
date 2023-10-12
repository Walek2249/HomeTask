let a=2 // кол-во знаков после запятой
let b=15 // изначальное число
let c=3 // кол-во частей разбивки
let d=0  // минимальный показатель части разбивки
function* splitNParts(num, parts, min) {
    let remParts = parts;
    let sumParts = num;
    for (let i = 0; i < parts - 1; i++) {
        const pn = (Math.random() * (sumParts - (remParts*min)) + min).toFixed(a)
        yield pn
        sumParts -= pn;
        remParts -= 1;
    }
    yield sumParts.toFixed(a);
}

console.log(...splitNParts(b, c, d));