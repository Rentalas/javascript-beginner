export const compact = (array: any[]) => {
    const result = [];
    array.forEach(el => {
        if (el) {
            result.push(el);
            return;
        }
    })
    return result;
};

export const compact1 = (array: any[]) => {
    const compactedArray = array.reduce((acc, el) => {
        if (el) {
            acc.push(el);
            return acc;
        }

        return acc;

    }, [])

    return compactedArray;
}
