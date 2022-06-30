/**
 *
 * @param {number} num
 * @returns {void}
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
 * @returns {number}
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
 * @returns {number}
 */
function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

/**
 *
 * @param {number} num
 * @returns {number}
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
 * @returns {number}
 */
function factorialLoop(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total;
}

// console.log(factorial(15));
// console.log(factorialNumber(15));
// console.log(factorialLoop(15));

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 *
 */
function collectOdds(arr) {
    let odds = [];

    function helper(helperArray) {
        if (helperArray.length === 0) {
            return;
        }

        if (helperArray[0] % 2 !== 0) {
            odds.push(helperArray[0]);
        }

        return helper(helperArray.slice(1));
    }

    helper(arr);

    return odds;
}

// console.log(collectOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

// console.log(collectOddValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 *
 * @param {number} base
 * @param {number} exp
 * @returns {number}
 */
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base * power(base, exp - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16
// console.log(power(2, 5)); // 32
// console.log(power(2, 6)); // 64
// console.log(power(2, 7)); // 128

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(7));

// /**
//  *
//  * @param {number[]} array
//  * @returns {number}
//  */
// function productOfArray(array) {
//     let result = 1;

//     function helper(helperArray) {
//         if (helperArray.length === 0) {
//             return;
//         }

//         result *= helperArray[0];

//         return helper(helperArray.slice(1));
//     }

//     helper(array);

//     return result;
// }

/**
 *
 * @param {number[]} array
 * @returns {number}
 */
function productOfArray(array) {
    let result = 1;

    if (array.length === 0) {
        return result;
    }

    result *= array[0];

    return result * productOfArray(array.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
// console.log(productOfArray([1, 2, 3, 4, 5])); // 120

/**
 *
 * @param {number} num
 * @returns {numer}
 */
function recursiveRange(num) {
    if (num <= 1) {
        return 1;
    }

    return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

/**
 *
 * @param {number} num
 * @returns {number}
 */
function fib(num) {
    let fibonachiSeq = [1, 1];

    function helper(helperArray) {
        if (num === helperArray.length - 1) {
            return;
        }

        helperArray.push(
            helperArray[helperArray.length - 1] +
                helperArray[helperArray.length - 2]
        );

        return helper(helperArray);
    }

    helper(fibonachiSeq);

    return fibonachiSeq[num - 1];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
