function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let num of array1) {
        obj1[num ** 2] = ++obj1[num ** 2] || 1;
    }

    for (let num of array2) {
        obj2[num] = ++obj2[num] || 1;
    }

    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
