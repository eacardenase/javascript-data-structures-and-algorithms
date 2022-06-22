function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < array1.length; i++) {
        obj1[array1[i] ** 2] = ++obj1[array1[i] ** 2] || 1;
        obj2[array2[i]] = ++obj2[array2[i]] || 1;
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
