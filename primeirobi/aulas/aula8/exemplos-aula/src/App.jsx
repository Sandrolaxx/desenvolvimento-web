import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sandro");
  const [frutas, setFrutas] = useState(["🍊", "🍍", "🍌", "🍐", "🍓"]);
  const [listaPessoas, setListaPessoas] = useState([
    {
        "id": 232,
        "nome": "Maga",
        "idade": 32
    },
    {
        "id": 432,
        "nome": "Robson",
        "idade": 34
    },
    {
        "id": 442,
        "nome": "João",
        "idade": 23
    },
    {
        "id": 777,
        "nome": "Girso",
        "idade": 29
    }
  ]);
  const [nomeFruta, setNomeFruta] = useState("");

  const novaPessoa = {
    "id": 1111,
    "nome": "Sandrolax",
    "idade": 26
  }

  return (
    <>
      <h2>Contador - {name}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        {count > 10 ? <p>É maior!!</p> : <p>Menor!</p>}
        {count > 5 && <p>É maior que 5</p>}
      </div>
      <ul>
        <h3>Frutas</h3>
        {frutas.map((fruta, indice) => (
            <li key={indice}>
                {fruta}
            </li>
        ))}
        {listaPessoas.map(pessoa => (
            <div key={pessoa.id}>
                <p>Nome:{pessoa.nome}</p>
                <p>Idade:{pessoa.idade}</p>
            </div>
        ))}
        <button onClick={() => setListaPessoas([...listaPessoas, novaPessoa])}>
            Adicionar pessoa
        </button>
        <button onClick={() => setListaPessoas(listaPessoas.filter(pessoa => pessoa.nome.includes("Maga")))}>
            Filtrar MAGA
        </button>
        <input type="text" value={nomeFruta} 
            onChange={evento => setNomeFruta(evento.target.value)} />
        <button onClick={() => setFrutas([...frutas, nomeFruta])}>
            Salvar
        </button>
      </ul>
    </>
  );
}

export default App;
