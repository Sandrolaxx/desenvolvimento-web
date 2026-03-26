import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
    // ===== CONCEITO: useState Hook =====
    // useState é um Hook do React que permite adicionar estado a componentes funcionais
    // Sintaxe: const [valor, setValor] = useState(valorInicial)
    // - 'valor' é a variável de estado atual
    // - 'setValor' é a função para atualizar o estado
    // - 'valorInicial' é o valor inicial do estado
    
    // Estado simples com número
    const [contador, setContador] = useState(0);
    
    // Estado com booleano para controle de carregamento
    const [carregando, setCarregando] = useState(true);
    
    // ===== CONCEITO: Input Controlado =====
    // Estado para controlar o valor do input (controlled component)
    // O React controla o valor do input, não o DOM
    const [nomeProduto, setNomeProduto] = useState("");
    
    // Estado com array de objetos (lista de produtos)
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Teclado Gamer - RedDragon", valor: 200 },
        { id: 2, nome: "Memória Ram Corsair - DDR5", valor: 42200 }
    ])

    // Função para incrementar o contador
    function incrementar() {
        setContador(contador + 1);
    }

    // ===== CONCEITO: Criação de Objetos e Atualização Imutável de Listas =====
    function criarProduto() {
        // Criação de um novo objeto produto
        const produto = {
            id: produtos.length + 1,
            nome: nomeProduto,
            valor: 47.47
        }

        // IMPORTANTE: Atualização IMUTÁVEL da lista
        // Usamos o spread operator (...) para criar uma NOVA array
        // [...produtos, produto] cria uma nova array com todos os produtos existentes + o novo
        // NUNCA use produtos.push() pois modifica o array original (mutação)
        setProdutos([...produtos, produto]);
        
        // Limpa o input após adicionar o produto
        setNomeProduto("")
    }

    // AVISO: Este setInterval está executando a cada render, causando múltiplos timers!
    // Deveria estar dentro de um useEffect para executar apenas uma vez
    setInterval(() => setCarregando(false), 5000)

    return (
        <main id="container">
            {/* Exemplo 1: Uso básico de estado */}
            <h1>Contador</h1>
            <p>Valor: {contador}</p>
            <Button texto="Incrementar" funcao={incrementar} />
            
            <h1>Carrinho</h1>
            
            {/* ===== CONCEITO: Renderização Condicional ===== */}
            {/* Usa operador ternário: condição ? seVerdadeiro : seFalso */}
            {/* Se 'carregando' for true, mostra "Carregando", senão mostra a lista */}
            {carregando ?
                <h3>Carregando</h3>
                :
                // Renderiza a lista de produtos usando .map()
                // .map() transforma cada produto em um elemento JSX
                produtos.map(produto => (
                    // IMPORTANTE: 'key' é obrigatória para listas no React
                    // Ajuda o React a identificar quais itens mudaram
                    <span key={produto.id}>
                        <p>Nome: {produto.nome}</p>
                        <p>Valor: R$ {produto.valor}</p>
                    </span>
                ))}
            
            {/* ===== CONCEITO: Input Controlado ===== */}
            <h3>Adicionar Produto</h3>
            {/* 
                Input controlado: o React controla o valor do input
                - value={nomeProduto}: o valor vem do estado
                - onChange: atualiza o estado quando o usuário digita
                - e.target.value: pega o valor atual do input
                Fluxo: usuário digita → onChange dispara → atualiza estado → re-renderiza com novo valor
            */}
            <input type="text" value={nomeProduto}
                onChange={e => setNomeProduto(e.target.value)} />
            <Button texto="Adicionar" funcao={criarProduto} />
        </main>
    )
}