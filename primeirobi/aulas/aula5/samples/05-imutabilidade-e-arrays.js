// ==========================================
// 05. SPREAD OPERATOR E MANIPULAÇÃO DE ARRAYS
// ==========================================

console.log("--- Spread Operator (...) ---");
const carrinhoAntigo = ["Teclado", "Mouse"];
// Em vez de dar um .push(), criamos uma cópia e adicionamos o novo item
const carrinhoNovo = [...carrinhoAntigo, "Monitor"];
console.log("Novo carrinho:", carrinhoNovo);

console.log("\n--- A Trindade: map, filter e reduce ---");
const produtos = [
    { id: 1, nome: "Livro JS", preco: 50 },
    { id: 2, nome: "Caderno", preco: 15 },
    { id: 3, nome: "Mochila", preco: 120 }
];

// 1. MAP (Transforma cada item)
// Pegando apenas os nomes dos produtos
const nomesDosProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes (Map):", nomesDosProdutos);

// 2. FILTER (Seleciona itens baseados em uma condição)
// Filtrando produtos que custam menos de 60
const produtosBaratos = produtos.filter((produto) => produto.preco < 60);
console.log("Baratos (Filter):", produtosBaratos);

// 3. REDUCE (Agrega os valores em um só)
// Somando o preço de todos os produtos
const valorTotal = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0); // O '0' é o valor inicial do acumulador
console.log("Valor Total (Reduce): R$", valorTotal);