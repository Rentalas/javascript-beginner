export const flatten = (array: any[]): any[] => {
    const result = [];
    array.forEach(el => {
        if (!Array.isArray(el)) {
           result.push(el);
           return;
        }
        el.forEach(item => {
            result.push(item);
            return;
        })
    })
    
    return result;
}

export const flatten1 = (array: (unknown | unknown[])[]): unknown[] => {
    return array.reduce<unknown[]>((acc, el) => {
        if (!Array.isArray(el)) {
            acc.push(el);
            return acc;
        }
        el.forEach(item => {
            acc.push(item);
        })

        return acc;

    }, [])

   
}

