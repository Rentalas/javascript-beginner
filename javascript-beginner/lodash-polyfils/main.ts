
import { compact, compact1 } from "./array-method/compact";
import { flatten, flatten1, } from "./array-method/flatten";

console.log(flatten1([1, [2, [3, [4]], 5]]))
console.log(flatten([1, [2, [3, [4]], 5]]))
console.log(compact([0, 1, false, 2, '', 3]))
console.log(compact1([0, 1, false, 2, '', 3]))