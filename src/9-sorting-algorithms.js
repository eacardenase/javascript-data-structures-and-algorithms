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
    let end = array.length - 1;
    let noSwaps = false;

    for (let i = end; i >= 0; i--) {
        noSwaps = true;

        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) {
            break;
        }
    }

    return array;
}

// console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18])); // [10, 14, 14, 18, 29, 30, 37]
// console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3])); // [-3, 8, 12, 29, 37, 45, 88]
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (array[min] !== array[i]) {
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }

    return array;
}

// console.log(selectionSort([19, 44, 38, 5, 47, 15])); // [5, 15, 19, 38, 44, 47]
// console.log(selectionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
// console.log(selectionSort([0, 2, 2, 34, 22, 10, 19, 17]));

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            for (let j = i; j > 0; j--) {
                if (array[j] < array[j - 1]) {
                    let temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
    }

    return array;
}

// console.log(insertionSort([3, 44, 38, 5, 47, 15]));
// console.log(insertionSort([2, 1, 9, 76, 4]));

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while (true) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            sortedArray.push(arr2[j]);
            j++;
        }

        if (i === arr1.length) {
            sortedArray = sortedArray.concat(arr2.slice(j));
            break;
        }

        if (j === arr2.length) {
            sortedArray = sortedArray.concat(arr1.slice(i));
            break;
        }
    }

    return sortedArray;
}

// console.log(mergeSortedArrays([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
// console.log(mergeSortedArrays([], [1, 3])); // [1, 3]
// console.log(mergeSortedArrays([1, 3], [])); // [1, 3]
// console.log(mergeSortedArrays([100], [1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 100]

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let arr1 = mergeSort(array.slice(0, middle));
    let arr2 = mergeSort(array.slice(middle));

    return mergeSortedArrays(arr1, arr2);
}

// console.log(mergeSort([1, 10, 50, 2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
// console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(mergeSort([3, 44, 38, 5, 47, 15, 36, 26])); // [3, 5, 15, 26, 36, 38, 44, 47]
console.log(mergeSort([19, 44, 38, 5, 47, 15])); // [5, 15, 19, 38, 44, 47]
