type PrintNumbers = (from: number, to: number) => void;

export const printNumbers: PrintNumbers = (from, to) => {
    let current = from;
    const intervalTimerId = setInterval(() => {
        if (current > to) {
            clearInterval(intervalTimerId);
            return;
        }

        console.log(current);
        current++;
    }, 1000);
}

export const recursivePrintNumbers: PrintNumbers = (from, to) => {
    setTimeout(() => {
        if (from > to) {
            return;
        }

        console.log(from);
        recursivePrintNumbers(from + 1, to);
    }, 1000)
}


function printNumbers1(from, to) {
    let fromm = from - 1;
    let timerId = setInterval(() => alert(fromm += 1), 1000);
    
    
    setTimeout(() => { clearInterval(timerId); }, (to - fromm) * 1000);
    };