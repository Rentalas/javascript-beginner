// 1
export const sumSalaries = (salaries: {[name: string]: number}): number => {
    return Object.values(salaries).reduce((acc, el) => acc + el, 0);
}

// 2
export const count = (obj: object): number => Object.keys(obj).length;