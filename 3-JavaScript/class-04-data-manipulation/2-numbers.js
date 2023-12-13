console.log(Number(""));
console.log(Number(" "));
console.log(Number("Pablo"));
console.log(typeof Number("Pablo"));


let num1 = 7.99;
let num2 = 1;

console.log(parseInt(num1));
console.log(parseFloat(num2));

console.log(String(num1).replace(".", "").length);
console.log("R$ " + String(num1).replace(".", ","));

console.log(num1.toLocaleString("pt-br", {style: "currency", currency: "brl"}));
console.log(num1.toLocaleString("pt-br", {style: "currency", currency: "usd"}));
console.log(num1.toLocaleString("pt-br", {style: "currency", currency: "eur"}));
console.log(num1.toLocaleString("pt-br", {style: "currency", currency: "jpy"}));

// Math Functions

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(9));
console.log(Math.abs(num1));

console.log(Math.max(2, 8));

const numbers = [2, 57, 34, 12, 1, 69];
console.log(Math.max(...numbers)); // Spread
console.log(Math.min(...numbers)); // Spread

console.log(Math.round(2.7));
console.log(Math.round(2.3));

console.log(Math.floor(2.9));
console.log(Math.ceil(2.01));

console.log(Math.random());