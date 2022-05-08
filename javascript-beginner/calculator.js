class Calculator {
    _methods = {
        ['+']: (a, b) => a + b,
        ['-']: (a, b) => a - b,
    }
    
    calculate (str) {
        const stringValues = str.split(' ');
        // const operator = stringValues[1];
        const [a , operator, b] = stringValues;
        const method = this._methods[operator];

        return method(+a, +b);
    }    

    addMethod(methodName, operationCB) {
        this._methods[methodName] = operationCB;
    }


}
// if (оператор === '+') {return а + б}  
// if (оператор === '-') {return а - б}




// if (number === 5) return true
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8