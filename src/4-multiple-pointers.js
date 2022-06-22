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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])); // 6
