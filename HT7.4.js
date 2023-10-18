const d1 = "3487";
const d2 = "3794";
function hasDuplicateDigits(number) {
    const digitSet = new Set();
    for (let i = 0; i < number.length; i++) {
      const digit = number[i];
      if (digitSet.has(digit)) {
        return true; 
      }
      digitSet.add(digit);
    }
    return false; 
  }
  

  function findMatchingDigits(d1, d2) {
    if (d1.length !== 4 ||  d2.length !== 4) {
      throw new Error("Числа должны быть 4-х значными.");
    }
  
    if (hasDuplicateDigits(d1) ||  hasDuplicateDigits(d2)) {
      throw new Error("Числа не могут содержать повторяющиеся цифры.");
    }
  
    let matchingValueAndPosition = 0;
    let matchingValue = 0;
  
    for (let i = 0; i < 4; i++) {
      if (d1[i] === d2[i]) {
        matchingValueAndPosition++;
      } else if (d2.includes(d1[i])) {
        matchingValue++;
      }
    }
  
    return {
      matchingValueAndPosition,
      matchingValue,
    };
  }
  
  const matchingDigits = findMatchingDigits(d1, d2);
  console.log(d1,d2);
  console.log(matchingDigits);