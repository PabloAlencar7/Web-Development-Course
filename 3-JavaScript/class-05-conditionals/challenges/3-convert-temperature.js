try {
    let tempNumber = prompt("Digite sua temperatura (Apenas números)");
    let tempScale = prompt("Digite a escala da temperatura (C ou F)");

    let tempNumeric = parseInt(tempNumber);

    if (isNaN(tempNumeric)) {
        throw new Error("Digite um número válido para a temperatura.");
    }

    let CelcFah = (tempNumeric * 1.8) + 32;
    let FahCelc = (tempNumeric - 32) / 1.8;

    if (tempScale === "C") {
        console.log(`Sua temperatura de ${tempNumber}C equivale a ${CelcFah}F`);
    } else if (tempScale === "F") {
        console.log(`Sua temperatura de ${tempNumber}F equivale a ${FahCelc}C`);
    } else {
        throw new Error("Digite uma escala válida (C ou F).");
    }
} catch (error) {
    console.log(`Ocorreu um erro: ${error.message}`);
}
