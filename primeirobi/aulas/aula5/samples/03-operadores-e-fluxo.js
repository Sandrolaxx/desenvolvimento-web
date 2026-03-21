// ==========================================
// 03. OPERADORES E CONTROLE DE FLUXO
// ==========================================

console.log("--- A Regra do Triplo Igual (===) ---");
const numeroString = "5";
const numeroReal = 5;

// '==' compara só o valor (EVITE)
console.log("'5' == 5 resulta em:", numeroString == numeroReal); // true

// '===' compara valor E tipo (USE SEMPRE)
console.log("'5' === 5 resulta em:", numeroString === numeroReal); // false

console.log("\n--- Condicionais (if/else) ---");
const nota = 8;
const frequencia = 80;

// Operador Lógico && (E)
if (nota >= 7 && frequencia >= 75) {
    console.log("Resultado: Aluno Aprovado! 🎉");
} else {
    console.log("Resultado: Aluno Reprovado. 😢");
}

console.log("\n--- Laços de Repetição (for) ---");
// Executa o bloco de código 3 vezes
for (let i = 1; i <= 3; i++) {
    console.log(`Contagem: ${i}`);
}