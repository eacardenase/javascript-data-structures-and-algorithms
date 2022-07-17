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
// console.log(mergeSort([19, 44, 38, 5, 47, 15])); // [5, 15, 19, 38, 44, 47]

/**
 *
 * @param {Array} array
 * @returns {number}
 */
function pivotHelper(array) {
    const pivot = 0;
    let counter = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[pivot]) {
            counter++;
            let temp = array[counter];
            array[counter] = array[i];
            array[i] = temp;
        }
    }

    if (counter > 0) {
        let temp = array[pivot];
        array[pivot] = array[counter];
        array[counter] = temp;
    }

    return counter;
}

// console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3])); // 4
// console.log(pivotHelper([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18])); // 6
// console.log(pivotHelper([26, 23, 27, 44, 17, 47, 39, 42, 43, 1])); // 3
// console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3])); // 3
// console.log(pivotHelper([9, 4, 8, 2, 1, 5, 7, 6, 3])); // 8

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivotIdx = pivotHelper(array);

    const left = quickSort(array.slice(0, pivotIdx));
    const right = quickSort(array.slice(pivotIdx + 1));

    return left.concat(array[pivotIdx]).concat(right);
}

// console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(quickSort([11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27])); // [6, 10, 11, 19, 20, 20, 23, 27, 30, 32, 40, 40, 41, 42, 43, 50]
// console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18])); // [1, 4, 11, 14, 16, 18, 28, 36, 37, 40, 41, 42]
// console.log(quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1])); // [1, 17, 23, 26, 27, 39, 42, 43, 44, 47]
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(quickSort([9, 4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 *
 * @param {number} number
 * @param {number} position
 * @returns {number}
 */
function getDigit(number, position) {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0
// console.log(getDigit(-12345, 5)); // 0

/**
 *
 * @param {number} number
 * @returns {number}
 */
function digitCount(number) {
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
// console.log(digitCount(-314)); // 3

/**
 *
 * @param {number[]} numberArr
 * @returns {number}
 */
function mostDigits(numberArr) {
    let max = 0;

    for (let i = 0; i < numberArr.length; i++) {
        max = Math.max(max, digitCount(numberArr[i]));
    }

    return max;
}

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2

/**
 *
 * @param {number[]} numberArr
 * @returns {number[]}
 */
function radixSort(numberArr) {
    return numberArr;
}
