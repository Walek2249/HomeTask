function mergeArrays(arr1, index, arr2) {
    arr1.splice(index, 0, ...arr2);
    return arr1;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c'];
const index = 3;

const modArray = mergeArrays(array1, index, array2);
console.log(modArray);