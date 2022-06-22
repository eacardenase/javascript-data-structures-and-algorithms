function sumZero(sortedArray) {
    let start = 0;
    let end = sortedArray.length - 1;

    for (let i = 0; i < sortedArray.length; i++) {
        if (start === end) {
            break;
        }

        if (sortedArray[start] + sortedArray[end] === 0) {
            return [sortedArray[start], sortedArray[end]];
        } else if (sortedArray[start] + sortedArray[end] > 0) {
            end--;
        } else {
            start++;
        }
    }

    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
