const jacy = {
    nome: "Jacy",
    idade: 30,
    profissao: "Desenvolvedor"
}

console.log(jacy.hasOwnProperty("nomexx"));

Pessoa = function(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}

Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
}

const credi = new Pessoa("Credi", 25, "Designer");
console.log(credi);