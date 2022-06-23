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

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
