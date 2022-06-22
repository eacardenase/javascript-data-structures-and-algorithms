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

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false

// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const str1Lower = str1.toLowerCase();
//     const str2Lower = str2.toLowerCase();

//     const obj1 = {};
//     const obj2 = {};

//     for (let i = 0; i < str1Lower.length; i++) {
//         obj1[str1Lower[i]] = ++obj1[str1Lower[i]] || 1;
//         obj2[str2Lower[i]] = ++obj2[str2Lower[i]] || 1;
//     }

//     for (let letter in obj1) {
//         if (obj1[letter] !== obj2[letter]) {
//             return false;
//         }
//     }

//     return true;
// }

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter]--;
        }
    }

    return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
