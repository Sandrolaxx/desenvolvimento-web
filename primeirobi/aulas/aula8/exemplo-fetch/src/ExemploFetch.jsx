import { useEffect, useState } from "react";

export default function ExemploFetch() {
    const [ativo, setAtivo] = useState(false);
    const [valorBtc, setValorBtc] = useState();

    useEffect(() => {
        //https://economia.awesomeapi.com.br/json/last/BTC

        fetch("https://economia.awesomeapi.com.br/json/last/BTC")
            .then(response => response.json())
            .then(json => setValorBtc(json.BTCBRL.bid))
            .catch(erro => console.error("Erro bolado:", erro))

        console.log("Teste Show!🤯")
    }, [ativo]);

    return (
        <main>
            <h1>Exemplo useEffect</h1>
            <p>O valor é {ativo ? "Ativo" : "Inativo"}</p>
            <p>Valor Atual BTC: {valorBtc && parseFloat(valorBtc).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => setAtivo(!ativo)}>
                Alterar Valor
            </button>
        </main>
    )
}