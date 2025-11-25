const Calc = (operator, num1, num2, ...rest) => {
    console.log(rest);
    if(operator === '+') {
        return num1 + num2 + rest.reduce((acc, val) => acc + val, 0);
    }
    if(operator === '-') {
        return num1 - num2 - rest.reduce((acc, val) => acc - val, 0);
    }
    if(operator === '*') {
        return num1 * num2 * rest.reduce((acc, val) => acc * val, 1);
    }
    if(operator === '/') {
        return num1 / num2 / rest.reduce((acc, val) => acc / val, 1);
    }
    throw new Error('Invalid operator');
}
console.log(Calc('/', 4, 3)); // 10