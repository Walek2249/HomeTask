function mergeArrays(arr1, arr2) {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5,];
const array2 = ['a', 'b', 'c',`d`,`e`];
const modArray = mergeArrays(array1, array2);
console.log(modArray);