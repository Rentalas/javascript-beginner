// const fooBar = (numbers) => {
//     numbers.forEach(el => {
//         if (el % 3 === 0 && el % 5 === 0) {
//             console.log('foobar');
//             return;
//         }

//         if (!(el % 3)) {
//             console.log('foo');
//             return;
//         }

//         if (!(el % 5)) {
//             console.log('bar');
//             return;
//         }

//         console.log(el)
//     })
// }
// // fooBar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);


const numTransform = num => {
    if (!(num % 3) && !(num % 5)) return 'foobar';

    if (!(num % 3)) return 'foo';

    if (!(num % 5)) return 'bar';

    return num;
};

// const foobar = (startNum, endNum) => {
//     let resultStr = '';

//     for (let i = startNum; i <= endNum; i++) {
//         if (i === startNum) {
//             resultStr += numTransform(i);
//             continue;
//         }

//         resultStr += ', ' + numTransform(i);
//     }

//     console.log(resultStr);
// }
// console.log('i\'m working');
// foobar(1, 100);


const createSequencialNumbers = (start, end) => {
    const length = end - start + 1;
    const arr = Array.from({ length }).fill(1);
    let current = start;
    return arr.map(el => {
        const updatedEl = el * current;
        current++;
        return updatedEl;
    })
}

const foobar5 = (start, end) => {
    const numbers = createSequencialNumbers(start, end);
    let resultStr = '';

    numbers.forEach(i => {
        if (i === start) {
            resultStr += numTransform(i);
            return;
        }

        resultStr += ', ' + numTransform(i);
    });

    return resultStr;
}

console.log(foobar5(1, 100))