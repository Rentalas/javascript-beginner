
const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const users = [ vasya, petya, masha ];

// const names = users.map(i => i.name);
const names = users.reduce((acc, el) => {
    const name = el.name;
    acc.push(name);
    return acc;
}, []);
console.log( names ); // Вася, Петя, Маша




// 1. Обойти все елементы, 
// 2. Вызвать коллбекк над всеми елементами
// 3. Наполнить новый массив результатами выполнения колбека.
const arrayMap = (arr, callbackFn) => {
    const resultArray = [];
    arr.forEach((el, i, array) => resultArray.push(callbackFn(el, i, array)));
    return resultArray
};

const numbers = [1,5,7,8,9];
const increasedNumbers = arrayMap(numbers, el => el + 1);
console.log(numbers, increasedNumbers);

// const fn1 = el => el;     
// function fn2(el) {
//     return el
// }
