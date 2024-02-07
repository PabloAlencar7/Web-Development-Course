const musics = [
    "Samurai",
    "Oceano",
    "Se...",
    "Flor de Lis",
    "Um amor puro",
    "Eu te devoro",
];

console.log(
    musics.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
);

const students = [
    {id: 1, name: "Pablo", grade: 9},
    {id: 1, name: "Amilton", grade: 10},
    {id: 1, name: "Carlos", grade: 8},
    {id: 1, name: "Natanael", grade: 7},
    {id: 1, name: "Matheus", grade: 6},
];

students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);
