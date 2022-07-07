//@ts-check

// swapping
// ES5
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES6
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function bubbleSort(array) {
    const sortedArray = [...array];
    let end = sortedArray.length - 1;
    let noSwaps = false;

    for (let i = end; i >= 0; i--) {
        noSwaps = true;

        for (let j = 0; j <= i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) {
            break;
        }
    }

    return sortedArray;
}

// console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18])); // [10, 14, 14, 18, 29, 30, 37]
// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3])); // [-3, 8, 12, 29, 37, 45, 88]
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
