function randomNumber(min, max) {
    const qtd = (max - min + 1)
    return Math.floor(Math.random() * qtd + min);
}

console.log(randomNumber(1, 25));
