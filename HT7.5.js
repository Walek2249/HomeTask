const e = [4, 2, 8, 1, 6];
function sortArray(arr, ascending = true) {
  return arr.sort((a, b) => ascending ? a - b : b - a);
}
console.log(e)
console.log(`Сортировка массива по возрастанию`);
console.log(sortArray(e, true));
console.log(`Сортировка массива по убыванию`);
console.log(sortArray(e, false));