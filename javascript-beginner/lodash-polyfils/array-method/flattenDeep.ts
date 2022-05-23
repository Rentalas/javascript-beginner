export const flattenDeep1 = (arr) => {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, el) => {
            return acc.concat(flattenDeep1(el))
        }, [])
    }
    return arr
}


export const flattenDeep = (arr) =>
    arr.reduce((acc, el) =>
        acc.concat(Array.isArray(el)
            ? flattenDeep(el)
            : el), []);

