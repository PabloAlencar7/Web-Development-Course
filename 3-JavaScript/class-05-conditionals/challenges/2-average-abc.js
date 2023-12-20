function converterNota(nota) {
    let notaConvertida = nota * 10;

    switch (true) {
        case (notaConvertida >= 90 && notaConvertida <= 100):
            console.log(`Aluno aprovado com nota A`);
            break;
        case (notaConvertida >= 80 && notaConvertida < 90):
            console.log(`Aluno aprovado com nota B`);
            break;
        case (notaConvertida >= 70 && notaConvertida < 80):
            console.log(`Aluno aprovado com nota C`);
            break;
        case (notaConvertida >= 60 && notaConvertida < 70):
            console.log(`Aluno reprovado com nota D`);
            break;
        case (notaConvertida >= 0 && notaConvertida < 60):
            console.log(`Aluno reprovado com nota F`);
            break;
        default:
            console.log(`Insira uma nota válida`);
            break;
    }

    return notaConvertida;
}


const notaAluno = 1.5;
converterNota(notaAluno);
