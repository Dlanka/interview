

const operations = {
    '/': (num1, num2) => Number.parseFloat(num1) / Number.parseFloat(num2),
    '*': (num1, num2) => Number.parseFloat(num1) * Number.parseFloat(num2),
    '+': (num1, num2) => Number.parseFloat(num1) + Number.parseFloat(num2),
    '-': (num1, num2) => Number.parseFloat(num1) - Number.parseFloat(num2),
}


// eslint-disable-next-line no-extend-native
Array.prototype.updateArray = function (index, total) {
    this.splice(index, 2);
    this.splice(index - 1, 1, total.toString());
};


// eslint-disable-next-line no-extend-native
String.prototype.convertToArray = function () {
    var numberAndOparator = /[/*+-]|[0-9.]*/g
    return this.match(numberAndOparator).filter(v => v.trim())
};

const calculate = (numAndOpt) => {
    let total = 0;

    while (numAndOpt.length > 1) {
        var mathProcedior = ['/', '*', '+', '-'];
        var checkItem = 0;

        while (mathProcedior.length > checkItem) {
            let checkOpt = mathProcedior[checkItem];

            // eslint-disable-next-line no-loop-func
            numAndOpt.forEach((val, i) => {

                if (checkOpt === '/' && val === '/') {
                    total = operations['/'](numAndOpt[i - 1], numAndOpt[i + 1]);
                    numAndOpt.updateArray(i, total);
                }
                if (checkOpt === '*' && val === '*') {
                    total = operations['*'](numAndOpt[i - 1], numAndOpt[i + 1]);
                    numAndOpt.updateArray(i, total);
                }
                if (checkOpt === '+' && val === '+') {
                    total = operations['+'](numAndOpt[i - 1], numAndOpt[i + 1]);
                    numAndOpt.updateArray(i, total);
                }
                if (checkOpt === '-' && val === '-') {
                    total = operations['-'](numAndOpt[i - 1], numAndOpt[i + 1]);
                    numAndOpt.updateArray(i, total);
                }
            });

            checkItem++
        }
    }

    return total;
}


const solveParenthesis = calNum => {
    var parenthesisRegx = /\([0-9\-+*/.]*\)*/g

    if (parenthesisRegx.test(calNum)) {
        calNum.match(parenthesisRegx).forEach((val, i) => {
            var valArray = val.convertToArray();
            calNum = calNum.replace(val, calculate(valArray));

        })
    }
    return calNum;
}

export const calculateTo = (val) => {
    return calculate(solveParenthesis(val).convertToArray());
}

export const hasDot = (val) => {
    const rex = /[-+]|[0-9.]*/g;
    const currentInputs = val.match(rex).filter(String)
    return currentInputs[currentInputs.length - 1].includes('.');
}