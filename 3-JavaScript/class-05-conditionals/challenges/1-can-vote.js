function verificarVoto(idade) {
if (idade >= 16 && idade >= 70) {
    return "Voto facultativo"; 
    } else if (idade >= 18) {
    return "Voto obrigatório";
    } else {
    return "Não pode votar ainda";
    }
}


const idadeUsuario = 71;
const situacaoVoto = verificarVoto(idadeUsuario);
console.log(situacaoVoto);
