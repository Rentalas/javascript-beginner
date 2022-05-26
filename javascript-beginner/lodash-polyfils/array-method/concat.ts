export const concat = (array: any[], ...args: (any | any[])[]) => {
    const result = array.slice();
    args.forEach(el => {
        if (!Array.isArray(el)) {
            result.push(el);
            return;
        }

        el.forEach(item => {
            result.push(item);
            return;
        });

    });

    return result;
}