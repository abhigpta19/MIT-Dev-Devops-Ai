export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

export function square(n) {
    return n * n;
}

export function cube(n) {
    return n * n * n;
}

export function pow4(n){
    return n*n*n*n;
}

// module.exports = {
//     add,subtract,multiply,divide,square,cube
// }