const array = [3, 4, 1, 2, 7, 30, 50];
function sortArray(arr, ascending = true) {
  return arr.sort((a, b) => ascending ? a - b : b - a);
}
console.log(array)
console.log(`Сортировка массива по возрастанию`);
console.log(sortArray(array, true));
console.log(`Сортировка массива по убыванию`);
console.log(sortArray(array, false));