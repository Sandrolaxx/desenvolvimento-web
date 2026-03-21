// ==========================================
// 04. FUNÇÕES, ARROW FUNCTIONS E DESESTRUTURAÇÃO
// ==========================================

console.log("--- Função Tradicional ---");
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Prof"));

console.log("\n--- Arrow Function (Moderna) ---");
// Mais curta e com retorno implícito (sem chaves e sem a palavra 'return')
const saudacaoModerna = (nome) => `E aí, ${nome}, beleza?`; // Usando Template String (crases)
console.log(saudacaoModerna("Turma"));

console.log("\n--- Desestruturação (Destructuring) ---");
const dev = { 
    nome: 'Roberto', 
    stack: 'React', 
    nivel: 'Tech Lead' 
};

// Forma antiga: const stack = dev.stack;
// Forma moderna: extrai a propriedade direto do objeto
const { nome, stack } = dev; 
console.log(`O desenvolvedor ${nome} trabalha com ${stack}.`);