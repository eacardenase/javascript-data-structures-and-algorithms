/**
 *
 * @param {number} num
 * @return {void}
 */
function countDown(num) {
    if (num <= 0) {
        console.log('All done');
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}

// countDown(5);
/**
 *
 * @param {number} num
 * @return {number}
 */
function sumRange(num) {
    if (num === 1) {
        return 1;
    }

    return num + sumRange(num - 1);
}

// console.log(sumRange(3));

/**
 *
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

/**
 *
 * @param {number} num
 * @return {number}
 */
function factorialNumber(num) {
    var factorial = num;
    for (var i = 1; i < num; i++) {
        factorial *= i;
    }
    return factorial;
}

/**
 *
 * @param {number} num
 * @return {number}
 */
function factorialLoop(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total;
}

console.log(factorial(15));
console.log(factorialNumber(15));
console.log(factorialLoop(15));
