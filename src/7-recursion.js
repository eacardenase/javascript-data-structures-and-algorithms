//@ts-check

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
    if (array.length === 0) {
        return 1;
    }

    return array[0] * productOfArray(array.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
// console.log(productOfArray([1, 2, 3, 4, 5])); // 120

/**
 *
 * @param {number} num
 * @returns {number}
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
    if (num <= 2) {
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

// /**
//  *
//  * @param {string} str Input string
//  * @returns {string} String reversed
//  */
// function reverse(str) {
//     let reversedString = '';

//     /**
//      *
//      * @param {string} helperStr
//      */
//     function helper(helperStr) {
//         if (helperStr.length === 0) {
//             return;
//         }

//         reversedString += helperStr.slice(helperStr.length - 1);

//         return helper(helperStr.slice(0, helperStr.length - 1));
//     }

//     helper(str);

//     return reversedString;
// }

/**
 *
 * @param {string} str Input string
 * @returns {string} String reversed
 */
function reverse(str) {
    if (str.length === 0) {
        return '';
    }

    let reversedString = '';

    reversedString += str.slice(str.length - 1);

    return reversedString.concat(reverse(str.slice(0, str.length - 1)));
}

// console.log(reverse('awesome')); // 'emosewa'
// console.log(reverse('rithmschool')); // 'loohcsmhtir'

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

/**
 *
 * @param {number[]} arr
 * @param {Function} cb
 * @returns {boolean}
 */
function someRecursive(arr, cb) {
    let flag = false;

    if (arr.length === 0) {
        return flag;
    }

    flag = cb(arr[0]);

    if (flag) {
        return true;
    }

    return someRecursive(arr.slice(1), cb);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function flatten(arr) {
    let newArray = [];

    if (arr.length === 0) {
        return newArray;
    }

    let currentEl = arr[0];

    if (Array.isArray(currentEl)) {
        currentEl = currentEl.concat(arr.slice(1));

        return flatten(currentEl);
    }

    newArray.push(currentEl);

    return newArray.concat(flatten(arr.slice(1)));
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

/**
 *
 * @param {string[]} arr
 * @returns {string[]}
 */
function capitalizeFirst(arr) {
    let newArray = [];

    if (arr.length === 0) {
        return newArray;
    }

    let currentEl = arr[0];

    currentEl = currentEl[0].toUpperCase() + currentEl.slice(1);

    newArray.push(currentEl);

    return newArray.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
