const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

const students = [
    {id: 1, name: "Pablo", grade: 9},
    {id: 1, name: "Amilton", grade: 10},
    {id: 1, name: "Carlos", grade: 8},
    {id: 1, name: "Natanael", grade: 7},
    {id: 1, name: "Matheus", grade: 6},
];

// const filteredStudents = students.filter((student) => student.grade >= 9);
// console.log(filteredStudents);

const studentName = prompt("Digite o nome do aluno:");
const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(studentName.toLowerCase()));

console.log(filteredStudents);