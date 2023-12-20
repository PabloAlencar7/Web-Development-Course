function removerPersonagem(elenco, personagem) {
    const index = elenco.indexOf(personagem);
    if (index !== -1) {
        elenco.splice(index, 1);
    }
    return elenco;
}

const deathNote = ["L", "Light", "Near", "Melo", "Misa"];
const personagemRemovido = "Misa";

const elencoAtualizado = removerPersonagem(deathNote, personagemRemovido);
console.log(elencoAtualizado);

