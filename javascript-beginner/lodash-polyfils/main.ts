
import { compact, compact1 } from "./array-method/compact";
import { drop, drop1, drop2 } from "./array-method/drop";
import { dropRight } from "./array-method/dropRight";
import { fill } from "./array-method/fill";
import { flatten, flatten1, } from "./array-method/flatten";
import { flattenDeep, flattenDeep1 } from "./array-method/flattenDeep";
import { flattenDepth } from "./array-method/flattenDepth";


// console.log(flatten1([1, [2, [3, [4]], 5]]))
// console.log(flatten([[1, 2], [3, [4]], 5]))
// console.log(compact([0, 1, false, 2, '', 3]))
// console.log(compact1([0, 1, false, 2, '', 3]))
// console.log(drop([0, 0, 0, 0, 0], 3))
// console.log(drop1([0, 0, 0, 0, 0], 3))
// console.log(drop2([0, 1, 2, 3, 4], 0))
console.log(fill([1, 2, 3, 4, 5, 6], 33, 1, 4))
// console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// console.log(flattenDeep1([1, [2, [3, [4]], 5]]))
// console.log(flattenDepth([[[[1, [2, [3, [4]], 5]]]]], 3))
// console.log(flattenDepth1([[[[1, [2, [3, [4]], 5]]]]], 1))
// console.log(flattenDepth2([[[[1, [2, [3, [4]], 5]]]]], 3))
// console.log(dropRight([1, 2, 3, 4, 5], 2))