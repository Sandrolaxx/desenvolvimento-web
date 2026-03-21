// ==========================================
// 01. VARIÁVEIS: var, let e const
// ==========================================

console.log("--- O Problema do 'var' ---");
// O 'var' vaza o escopo de blocos (como um if)
if (true) {
    var nomeVar = "Carlos"; 
}
console.log("Acessando var fora do bloco:", nomeVar); // Funciona, mas pode causar bugs!

console.log("\n--- O Padrão Moderno: 'let' e 'const' ---");
// O 'let' e 'const' respeitam o bloco onde foram criados
if (true) {
    let nomeLet = "Ana";
    const pi = 3.14;
    console.log("Dentro do bloco:", nomeLet, pi);
}
// Se tentarmos acessar 'nomeLet' ou 'pi' aqui fora, o JS vai dar erro! (Descomente para testar)
// console.log(nomeLet); 

console.log("\n--- let vs const ---");
let idade = 30;
idade = 31; // let permite reatribuição
console.log("Idade atualizada:", idade);

const dataNascimento = 1990;
// dataNascimento = 1991; // ERRO! const não permite reatribuição
console.log("Data de nascimento (constante):", dataNascimento);

// Regra de ouro: Use const por padrão. Use let se o valor for mudar.