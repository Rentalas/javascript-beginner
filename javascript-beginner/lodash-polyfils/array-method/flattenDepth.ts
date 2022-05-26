// export const flattenDepth = (arr, depth = 1) =>
//   depth != 1
//     ? arr.reduce((acc, el) => acc.concat(Array.isArray(el)
//       ? flattenDepth(el, depth - 1)
//       : el), [])
//     : arr.reduce((acc1, el1) => acc1.concat(el1), []);

// export const flattenDepth1 = (arr, depth = 1) => {
//   depth != 1
//   if (Array.isArray(arr)) {
//     return arr.reduce((acc, el) => {
//       return acc.concat(flattenDepth(el, depth - 1));
//     }, [])
//   }
//   arr.reduce((acc1, el1) => acc1.concat(el1), []);
// }


// export const flattenDepth2 = (arr, depth = 1) => {
//   if (depth != 1) {
//     arr.reduce((acc, el) => {
//       if (Array.isArray(el)) {
//         acc.concat(flattenDepth(el, depth - 1))
//       }
//       // return el
//     }, [])
//   }
//   return arr.reduce((acc1, el1) => acc1.concat(el1), []);
// }

export const flattenDepth = (arr, depth = 1) => {
    if (depth != 1) {
        return arr.reduce((acc, el) => {
            const data = Array.isArray(el)
                ? flattenDepth(el, depth - 1)
                : el;

            return acc.concat(data)
        }, []);
    }
    return arr.reduce((acc1, el1) => acc1.concat(el1), [])
};
