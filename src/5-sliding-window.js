function maxSubarraySum(array, num) {
    if (array.length < num) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    tempSum = maxSum;

    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = maxSum > tempSum ? maxSum : tempSum;
    }

    return maxSum;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([], 4)); // null
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

/**
 *
 * @param {number[]} array
 * @param {number} window
 */
function maxSubarraySum(array, window) {
    if (array.length < window) {
        return null;
    }

    let sum = 0;

    for (let i = 0; i < window; i++) {
        sum += array[i];
    }

    let tempSum = sum;

    for (let i = window; i < array.length; i++) {
        tempSum = tempSum + array[i] - array[i - window];

        if (tempSum > sum) {
            sum = tempSum;
        }
    }

    return sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
