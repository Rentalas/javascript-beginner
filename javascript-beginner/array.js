const cssPropertyToJsMapping = (cssProperty) => {
    const splitedProperty = cssProperty.split("-");
    const capitalizedWords = splitedProperty.map((word, i) => {
        if (i === 0) {
            return word;
        }

        const firstLetter = word[0].toUpperCase();
        const restOfTheWord = word.slice(1);

        return firstLetter + restOfTheWord;
    })

    return capitalizedWords.join('');

};

console.log(cssPropertyToJsMapping("background-color"));

function camelize(str) {
    return str
      .split('-') 
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }

  const cssPropertyToJsMapping1 = (cssProperty) => {
    const splitedProperty = cssProperty.split("-");
    const capitalizedWords = splitedProperty.map((word, i) => 
         i === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    console.log(capitalizedWords.join(''));
    return capitalizedWords.join('');

};
cssPropertyToJsMapping1('anton-pokemon');



// const forEach = (arrey, callbackFunc) => {
//     for (let i = 0; i < arrey.length; i++) {
//         const el = arrey[i];
//         callbackFunc(el, i, arrey);
//     }
// };
// const arrey1 = 'abcde'.split('');
// forEach(arrey1, (el, i, ar) => {
//     return console.log('for element number ' + i + ' in ' + ar + ' the Value is ' + el)
// })

// const double = number => number * 2;
// // function double(number) {
// //     return number * 2;
// // }

// const arrey2 = [1,2,3,4,5,6];
// forEach(arrey2, number => console.log(double(number)));
// forEach(arrey2, (__, index) => console.log(double(index)));


const sumArray = arr => arr.reduce((acc, el, index, arrey) => {
    acc += el;
    return acc;
 
}, 0);

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
    return sumArray(numbers);
  }