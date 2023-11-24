console.log("test");

let courseCVT = "Desenvolvimento Web";
console.log("Turma de " + courseCVT); // concatenation

let num1 = "60";
let num2 = 9;

num1 = Number(num1); // type conversion

console.log(num1 + num2); // type coersion

// grouping operator
console.log("A soma de Num1 e Num2 é = " + (num1 + num2));

// interpolation
console.log("A soma de " + num1 + " e " + num2 + " é = " + (num1 + num2));

// template literal
let sumNumbers = num1 + num2;
console.log(`A soma de ${num1} e ${num2} = ${sumNumbers}`);