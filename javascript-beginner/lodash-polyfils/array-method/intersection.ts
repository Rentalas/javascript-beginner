export const intersection = (arrOfArrs) => {
    return arrOfArrs.reduce((acc, arr) => {
        return acc.filter(el => arr.includes(el));
    }, arrOfArrs[0])
}