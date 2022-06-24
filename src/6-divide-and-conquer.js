/**
 * @param {number[]} sortedArray
 * @param {number} num
 * @return {number}
 */

function search(sortedArray, num) {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === num) {
            return i;
        }
    }

    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
