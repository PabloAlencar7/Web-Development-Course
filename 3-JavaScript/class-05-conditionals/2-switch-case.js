const dayNow = new Date().getDay();

switch (dayNow) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    case 4:
        console.log("Quinta-feira");
        break;

    case 5:
        console.log("Sexta-feira");
        break;

    case 6:
        console.log("Sábado ");
        break;


    default:
        break;
}

const option = prompt(`
    Digite a opção desejada:

    1 - Consultoria
    2 - Atendimento
    3 - Encerrar
`);

switch (option) {
    case "1":
        window.alert("Consultoria em telemarketing.")
        break;

    case "2":
        window.alert("Aguarde nossos atendentes...")
        break;
    
    case "3":
        window.alert("Volte sempre!");
        break;

    default:
        window.alert("Opção inválida!")
        break;
}