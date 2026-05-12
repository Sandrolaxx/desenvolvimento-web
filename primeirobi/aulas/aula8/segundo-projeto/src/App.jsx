import { useState } from "react"
import './App.css'

export default function App() {
    const [nomeProduto, setNomeProduto] = useState("");
    const [valorProduto, setValorProduto] = useState(0.0);
    const produtoUm = {
        id: 1,
        nome: "Teclado Gamer",
        valor: 149.90
    }
    const produtoDois = {
        id: 2,
        nome: "Monitor Gamer",
        valor: 689.50
    }
    const [listaProdutos, setListaProdutos] = useState([
        produtoUm, produtoDois
    ]);

    function adicionar() {
        const novoProduto = {
            id: listaProdutos.length + 1,
            nome: nomeProduto,
            valor: valorProduto
        }

        setListaProdutos([...listaProdutos, novoProduto])
        setNomeProduto("")
        setValorProduto(0.0)
    }

    return (
        <div>
            <h1>Dados dos Produtos</h1>
            <label htmlFor="Nome">Nome Produto</label>
            <input type="text" name="produto" id="Nome"
                value={nomeProduto}
                onChange={e => setNomeProduto(e.target.value)} />
            <label htmlFor="Valor">Valor Produto</label>
            <input type="number" name="valor" id="Valor"
                value={valorProduto}
                onChange={e => setValorProduto(e.target.value)} />
            <button onClick={adicionar}>
                Adicionar
            </button>
            <hr />
            <h1>Lista Compras</h1>
            <ul>
                {listaProdutos.map(produto => (
                    <li key={produto.id}>
                        <p>Nome: {produto.nome}</p>
                        <p>Valor: {produto.valor}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
