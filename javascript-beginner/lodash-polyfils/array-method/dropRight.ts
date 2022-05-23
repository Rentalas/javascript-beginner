export const dropRight = (array, num) => {
    if (num > array.length) {
        return [];
    }
    if (num > 0) {
        array.length -= num
        return array;
    }
    return array;
}