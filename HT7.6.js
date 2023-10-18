const f = [1, 1, 65, 4, 5, 32, 5, 8];
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(f)
console.log(removeDuplicates(f));  