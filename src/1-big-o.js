function addUpTo1(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function addUpTo2(n) {
    return (n * (n + 1)) / 2;
}

// let t1 = performance.now();
// // console.log(addUpTo1(1000000000)); // 0.76 // O(n)
// console.log(addUpTo2(1000000000)); // 0.0028 // O(1)
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function countUpAndDown(n) {
    // O(n)
    console.log('Going Up!');

    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    console.log('At the top!\nGoing down...');

    for (let i = n - 1; i >= 0; i--) {
        console.log(i);
    }
}

// countUpAndDown(10);

function printAllPairs(n) {
    // O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// printAllPairs(10);

function sum(arr) {
    // O(1) for space complexity
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

function double(arr) {
    // O(n) for space complexity
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(2 + arr[i]);
    }

    return result;
}
