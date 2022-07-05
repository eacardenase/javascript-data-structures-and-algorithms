//@ts-check

/**
 *
 * @param {number[]} numberArr
 * @param {number} targetNum
 * @returns {number}
 */
function linearSearch(numberArr, targetNum) {
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] === targetNum) {
            return i;
        }
    }

    return -1;
}

// console.log(linearSearch([4, 2, 7, 4, 1, 0, 8], 1)); // 4
// console.log(linearSearch([4, 2, 7, 4, 1, 0, 8], 5)); // -1

/**
 *
 * @param {number[]} numberArr
 * @param {number} targetNum
 * @returns {number}
 */
function binarySearch(numberArr, targetNum) {
    let left = 0;
    let right = numberArr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (numberArr[middle] === targetNum) {
            return middle;
        } else if (numberArr[middle] < targetNum) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // 6
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
// console.log(
//     binarySearch([0, 0, 0, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9], 4)
// ); // 8
// console.log(
//     binarySearch([0, 0, 0, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9], 9)
// ); // 16
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
