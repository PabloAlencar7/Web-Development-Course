// Solicita um número ao usuário
var numero = prompt("Digite um número:");

// Converte o número para inteiro
numero = parseInt(numero);

// Verifica se o número é par ou ímpar e exibe um alerta
if (numero % 2 === 0) {
    alert("O número digitado é par.");
} else {
    alert("O número digitado é ímpar.");
}
