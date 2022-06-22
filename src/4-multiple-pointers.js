function sumZero(sortedArray) {
    let start = 0;
    let end = sortedArray.length - 1;

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[start] + sortedArray[end] === 0) {
            return [sortedArray[start], sortedArray[end]];
        }

        start++;
        end--;
    }

    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
