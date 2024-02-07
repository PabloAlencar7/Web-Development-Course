const array = [1, 2, 3]

function nameFunc(params) {
    return "A"
}

const myFunc = function () {
    return "A"
}

const myNewFunc = () => "A"

const newArray = array.map((value) => value * 2)

console.log(array);
console.log(newArray);

const films = [
    "Pulp Fiction",
    "Corra",
    "Psicopata Americano",
    "Uma noite de Crime",
];

const newFilms = films.map((film) => film.toUpperCase());
console.log(newFilms);