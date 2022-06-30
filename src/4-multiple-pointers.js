// function sumZero(sortedArray) {
//     let start = 0;
//     let end = sortedArray.length - 1;

//     for (let i = 0; i < sortedArray.length; i++) {
//         if (start === end) {
//             break;
//         }

//         if (sortedArray[start] + sortedArray[end] === 0) {
//             return [sortedArray[start], sortedArray[end]];
//         } else if (sortedArray[start] + sortedArray[end] > 0) {
//             end--;
//         } else {
//             start++;
//         }
//     }

//     return undefined;
// }

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined

// function countUniqueValues(sortedArray) {
//     let count = sortedArray.length > 0 ? 1 : 0;

//     for (let i = 1; i < sortedArray.length; i++) {
//         if (sortedArray[i] !== sortedArray[i - 1]) {
//             count++;
//         }
//     }

//     return count;
// }

// function countUniqueValues(sortedArray) {
//     if (sortedArray.length === 0) {
//         return 0;
//     }

//     let first = 0;

//     for (let i = 1; i < sortedArray.length; i++) {
//         if (sortedArray[first] === sortedArray[i]) {
//             continue;
//         } else {
//             first++;
//             sortedArray[first] = sortedArray[i];
//         }
//     }

//     return first + 1;
// }

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])); // 6

/**
 *
 * @param  {...any} args
 * @returns {boolean}
 */

function areThereDuplicates(...args) {
    let sortedArray = [...args];
    sortedArray = !parseInt(sortedArray[0])
        ? sortedArray.sort()
        : sortedArray.sort((a, b) => a - b);

    let left = 0;
    let right = 1;

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[left] !== sortedArray[right]) {
            left++;
            right++;
        } else {
            return true;
        }
    }

    return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 3, 5, 6, 8, 2, 5)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // false

/**
 *
 * @param {number[]} array
 * @param {number} average
 * @returns {boolean}
 */
function averagePair(array, average) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let tempAverage = (array[left] + array[right]) / 2;

        if (tempAverage === average) {
            return true;
        } else if (tempAverage < average) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function isSubsequence(str1, str2) {
    let left = 0;
    let right = 0;

    while (right < str2.length) {
        if (str1[left] === str2[right]) {
            left++;
        }

        right++;
    }

    if (left === str1.length) {
        return true;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false
