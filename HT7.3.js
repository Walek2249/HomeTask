const N = 9;
const M = 17;
function generateFibonacci(N, M) {
    if (N < 0 || M <= 0) {
      return [];
    }
  
    const fibonacci = [0, 1];
    while (fibonacci.length < N + M) {
      const nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(nextValue);
    }
  
    return Object.values(fibonacci.slice(N, N + M));
  }
console.log(generateFibonacci(N, M));