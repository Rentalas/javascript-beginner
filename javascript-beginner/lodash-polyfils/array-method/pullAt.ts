export const pullAt = (array, ...indexes) => {
    indexes.sort((a, b) => b - a);
    const pulledItems = array.filter((el, i) => indexes.includes(i));
    indexes.forEach(index => array.splice(index, 1))
    console.log(array)
    return pulledItems
}

