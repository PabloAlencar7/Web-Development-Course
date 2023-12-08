// Named

// parameters
function printText(text) {
    console.log(text);
}

printText('Cruzeiro'); // arguments
printText('Chelsea');

// Divisória!

function sumNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

sumNumbers();
sumNumbers(20, 3);
sumNumbers(2, 30);
sumNumbers(200, 500);

// return

function subNumbers(num1 = 0, num2 = 0) {
    const sub = num1 - num2; // key operator
    return sub;
}

console.log(subNumbers(2, 1));

const result = subNumbers(10, 5);
console.log(result);

// anonymous

const sum = function (num1, num2) {
    return num1 + num2;
}

// arrow ☆

const arrow = (num1, num2) => {
    return num1 * num2;
}

// ou então

const arrowElse = (num1, num2) =>  num1 * num2;
console.log(arrowElse(3, 3));
