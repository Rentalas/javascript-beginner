
import { printNumbers, recursivePrintNumbers } from "../for-train/macroTasks";
import { sumSalaries } from "../for-train/object";
import { delay, showCircleWithPromise } from "../for-train/promises";
import { compact, compact1 } from "./array-method/compact";
import { drop, drop1, drop2 } from "./array-method/drop";
import { dropRight } from "./array-method/dropRight";
import { fill } from "./array-method/fill";
import { flatten, flatten1, } from "./array-method/flatten";
import { flattenDeep, flattenDeep1 } from "./array-method/flattenDeep";
import { flattenDepth } from "./array-method/flattenDepth";
import { pull } from "./array-method/pull";
import { pullAt } from "./array-method/pullAt";
import { showCircle } from "../for-train/utils";
import { showCircleWithCallBack } from "../for-train/callbacks";
// import { pullAt } from "./array-method/pullAt";


// console.log(flatten1([1, [2, [3, [4]], 5]]))
// console.log(flatten([[1, 2], [3, [4]], 5]))
// console.log(compact([0, 1, false, 2, '', 3]))
// console.log(compact1([0, 1, false, 2, '', 3]))
// console.log(drop([0, 0, 0, 0, 0], 3))
// console.log(drop1([0, 0, 0, 0, 0], 3))
// console.log(drop2([0, 1, 2, 3, 4], 0))
// console.log(fill([1, 2, 3, 4, 5, 6], 33, 1, 4))
// console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// console.log(flattenDeep1([1, [2, [3, [4]], 5]]))
// console.log(flattenDepth([[[[1, [2, [3, [4]], 5]]]]], 3))
// console.log(flattenDepth1([[[[1, [2, [3, [4]], 5]]]]], 1))
// console.log(flattenDepth2([[[[1, [2, [3, [4]], 5]]]]], 3))
// console.log(dropRight([1, 2, 3, 4, 5], 2))
// console.log(pull([1, 2, 2, 1, 2, 3, NaN], 1, 3, NaN))
// console.log(pullAt([1,3,8,9,11,2], 4, 5))
// console.log(sumSalaries({"John": 100, "Pete": 300, "Mary": 250},))
// console.log(printNumbers(2, 6))
// console.log(recursivePrintNumbers(2, 6))
// delay(5000).then(() => alert('выполнилось через 3 секунды'));

// const button = document.querySelector('button');
// const clickHandler = () => showCircleWithCallBack(150, 150, 100, div => {
//     div.classList.add('message-ball');
//     div.append("Hello, world!");
//   });
//   button.addEventListener('click', clickHandler);

const button = document.querySelector('button');
const clickHandler1 = () => showCircleWithPromise(150, 150, 100)
    .then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });

button.addEventListener('click', clickHandler1);