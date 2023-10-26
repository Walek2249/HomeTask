function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function createPromiseWithRandomDelay(value) {
    return new Promise((resolve) => {
      const delay = randomDelay(1000, 5000);
      setTimeout(() => resolve(value), delay);
    });
  }
  
  const promise1 = createPromiseWithRandomDelay(1);
  const promise2 = createPromiseWithRandomDelay(2);
  const promise3 = createPromiseWithRandomDelay(3);
  
  async function getResultFromFastestPromise() {
    const result = await Promise.race([promise1, promise2, promise3]);
    console.log(result);
  }
  
  getResultFromFastestPromise();