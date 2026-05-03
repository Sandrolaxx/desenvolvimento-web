const nome = "José";
const aluno = {
    nome: "Sandrolax",
    idade: 27,
    endereco: {
        cidade: "Cascavel",
        bairro: "Tropical"
    },
    curso: "Eng. Soft"
}

// Spread Operator ...
const alunoAtualizado = {
    ...aluno,
    nome: "Claudio"
}

console.log(alunoAtualizado)

const frutas = ['Uva', 'Laranja'];
const frutasAtualizada = [...frutas, "Morango"]

console.log(frutasAtualizada)