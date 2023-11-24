let num = 10; // Global

{
    let num = 20; // Local
    num = 30;
    console.log(num);
}

console.log(num);