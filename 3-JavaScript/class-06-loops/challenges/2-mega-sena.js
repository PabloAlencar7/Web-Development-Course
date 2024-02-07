// Função para formatar os números menores que 10 com duas casas decimais
function formatNumber(num) {
    return num < 10 ? `0${num.toFixed(0)}` : num.toFixed(0);
  }
  
  // Array para armazenar os números sorteados
  let numerosSorteados = [];
  
  // Realiza o sorteio de 6 números
  for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random() * 60) + 1;
    numerosSorteados.push(numero);
  }
  
  // Ordena os números em ordem crescente
  numerosSorteados.sort((a, b) => a - b);
  
  // Exibe os números formatados em ordem crescente separados por "-"
  const numerosFormatados = numerosSorteados.map(numero => formatNumber(numero));
  const numerosEmLinha = numerosFormatados.join('-');
  console.log(numerosEmLinha);
  