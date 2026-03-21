// ==========================================
// 02. TIPOS DE DADOS
// ==========================================

console.log("--- Tipos Primitivos ---");
const texto = "Olá, Turma!";        // String
const numero = 42;                  // Number
const isEstudando = true;           // Boolean

// A diferença entre undefined e null:
let gavetaSemUso;                   // undefined: A gaveta existe, mas nunca colocamos nada.
const gavetaVazia = null;           // null: Nós abrimos e dissemos: "está vazia de propósito".

console.log("Gaveta sem uso:", gavetaSemUso);
console.log("Gaveta vazia:", gavetaVazia);

console.log("\n--- Tipos Não-Primitivos (Referências) ---");
// Objetos agrupam informações (Chave: Valor)
const aluno = { 
    nome: "Bia", 
    idade: 25 
};
console.log("Objeto Aluno:", aluno.nome);

// Arrays são listas
const tecnologias = ["HTML", "CSS", "JavaScript"];
console.log("Primeira tecnologia da lista:", tecnologias[0]); // Arrays começam no índice 0