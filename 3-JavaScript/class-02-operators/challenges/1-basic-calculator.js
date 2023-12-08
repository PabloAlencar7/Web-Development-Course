// Solicita dois números ao usuário
var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");

// Converte os valores para números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verifica se os valores inseridos são números
if (!isNaN(numero1) && !isNaN(numero2)) {
    // Realiza operações matemáticas
    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;
    var potencia = numero1 ** numero2;
    var raiz1 = Math.sqrt(numero1);
    var raiz2 = Math.sqrt(numero2);

    // Exibe os resultados usando document.write()
    document.write("Soma: " + soma + "<br>");
    document.write("Subtração: " + subtracao + "<br>");
    document.write("Multiplicação: " + multiplicacao + "<br>");
    document.write("Divisão: " + divisao + "<br>");
    document.write("Resto: " + resto + "<br>");
    document.write("Potência: " + potencia + "<br>");
    document.write("Raíz N1: " + raiz1 + "<br>");
    document.write("Raíz N2: " + raiz2 + "<br>");
} else {
    // Exibe uma mensagem se os valores inseridos não forem números
    document.write("Por favor, insira números válidos.");
}