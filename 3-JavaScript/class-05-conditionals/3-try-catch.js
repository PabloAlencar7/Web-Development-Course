const runApp = () => "Running function...";


try {
    console.log(runApp()); 
} catch (error) {
    console.error(error);
}

document.write("Aplicação online...");

function divNumbers(num1, num2) {
    if (num2 == 0) throw Error("Não se pode dividir números por zero!");
    return num1 / num2;
}

try {
    console.log(divNumbers(4, 0));
} catch (error) {
    console.error(error);
}
