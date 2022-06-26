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
 * @return {number}
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

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

/**
 *
 * @param {number[]} array
 * @param {number} window
 * @return {number}
 */
function minSubArrayLen(array, target) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < array.length) {
        if (total < target && end < array.length) {
            total += array[end];
            end++;
        } else if (total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= array[start];
            start++;
        } else if (end >= array.length) {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
