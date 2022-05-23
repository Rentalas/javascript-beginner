export const drop = (array: any[], num: number): number[] => {
    let result = [];
    array.forEach((el, i) => {
        if (i >= num)
        result.push(el);
        return;       
    });
    
    return result;
}

export const drop1 = (array: any[], num: number): number[] => {
    let result = [];
    array.filter((el, i) => {
        if (i >= num) {
            result.push(el)
        }
        return result;
    })
    return result;
}


export const drop2 = (array: any[], num: number): number[] => 

array.filter((el, index) => index >= num)