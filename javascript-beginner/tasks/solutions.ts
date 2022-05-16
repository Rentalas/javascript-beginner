import { Human } from "./tasks";

export const addNumbers = (num: number, ...arg: number[]): number => {
    if (arg.length === 0) {
        return num;
    }

    return addNumbers(num + arg[0], ...arg.slice(0));
};


export const sumArray = (arr: number[]): number => {
    let result = 0
    arr.forEach(num => result += num)
    return result
}

export const addNumbers1 = (num: number, ...arg: number[]): number => num + sumArray(arg);


const addNumbers2 = (num: number, ...arg: number[]): number => {
    arg.forEach(el => num += el)
    return num;
}



const multiplyAll = (arr: Array<number[]>): number => {
    let result = 1;
    arr.forEach(el => {
        el.forEach(num => result *= num)
    })
    return result;
};


export const camelize = (kebabStr: string): string => {
    let result = '';
    const splittedStr = kebabStr.split('-')
    splittedStr.forEach((el, i) => {
        if (i === 0) {
            result = el;
            return;
        };
        result += el[0].toUpperCase() + el.slice(1)
    });
    return result;
};

export const filterRange = (numbers: number[], from: number, end: number): number[] => {
    let result = [];

    numbers.forEach(el => {
        if (el < from || el > end) {
            return;
        };

        result.push(el);
    });

    return result;

};


export const nameMapping = (gamers: Human[]): string[] => {
    let result = [];

    gamers.forEach(el => result.push(el.name));

    return result;
};


export const fooBar = (num) => {
    let result = [];

    num.forEach(el => {
        if (el % 3 === 0 && el % 5 === 0) {
            result.push('foobar')
            return;
        };

        if (!(el % 3)) {
            result.push('foo')
            return;
        };

        if (!(el % 5)) {
            result.push('bar')
            return;
        };

        result.push(el);

    })
    return result;
};

