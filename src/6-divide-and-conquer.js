/**
 * @param {number[]} sortedArray
 * @param {number} num
 * @return {number}
 */

function search(sortedArray, num) {
    let min = 0;
    let max = sortedArray.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = sortedArray[middle];

        if (currentElement < num) {
            min = middle + 1;
        } else if (currentElement > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
